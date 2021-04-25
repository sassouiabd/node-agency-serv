const newman = require("newman");
const chalk = require("chalk");
const emoji = require("node-emoji");
const appRootPath = require("app-root-path");
const path = require("path");

const collections = require("./collections/user-apis.json");

// global vars
const myArgs = process.argv.slice(2);
const environment =
  myArgs[0] === "dev"
    ? require("./envs/dev_env.json")
    : require("./envs/prod_env.json");

const { log } = console;
const workingDir = path.join(appRootPath.path, "tests", "data");
const reporter = myArgs[1];
log("repoter:", reporter);
log("workingDir: ", workingDir);
newman
  .run({
    collection: collections,
    workingDir,
    environment,
    reporters: [reporter],
    bail: false,
    "suppress-exit-code": 1,
    reporter: {
      htmlextra: {
        export: "./tests/testResults.html",
        // template: './template.hbs'
        // logs: true,
        // showOnlyFails: true,
        // noSyntaxHighlighting: true,
        // testPaging: true,
        // browserTitle: "My Newman report",
        // title: "My Newman Report",
        // titleSize: 4,
        // omitHeaders: true,
        // skipHeaders: "Authorization",
        // hideRequestBody: ["Login"],
        // hideResponseBody: ["Auth Request"],
        // showEnvironmentData: true,
        // skipEnvironmentVars: ["API_KEY"],
        // showGlobalData: true,
        // skipGlobalVars: ["API_TOKEN"],
        // skipSensitiveData: true,
        // showMarkdownLinks: true,
        // showFolderDescription: true,
        // timezone: "Australia/Sydney"
      },
    },
  })
  .on("start", () => {
    log(`Starting tests on ${environment.name}`);
  })
  .on("done", (err, summary) => {
    if (err || (summary.run.failures && summary.run.failures.length > 0)) {
      log(
        `\n====>${emoji.get("x")}${chalk.red.bold(
          " Huston we got a problem "
        )}${emoji.get("face_with_head_bandage")} : ${chalk.red.bold(
          summary.run.failures[0].source.name
        )}`
      );
      process.exit(1);
    } else {
      log(
        `\n====>${emoji.get("white_check_mark")}${chalk.green.bold(
          " All tests are OK "
        )}${emoji.get("face_with_cowboy_hat")}`
      );
      process.exit(0);
    }
  });
