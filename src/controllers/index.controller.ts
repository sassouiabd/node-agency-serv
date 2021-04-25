import { Request, Response } from "express";

exports.home = (_req: Request, res: Response) => {
  res.render("index", { title: "engie node" });
};
