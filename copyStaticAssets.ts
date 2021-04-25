import * as shell from "shelljs";

shell.cp("-R", "public/", "dist/public/");
shell.cp("-R", "src/views/", "dist/views/");
