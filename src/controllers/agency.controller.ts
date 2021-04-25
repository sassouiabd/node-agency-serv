const Agency = require("../models/agency.model");

import { Request, Response } from "express";
import { IAgency } from "../types";

exports.add = async (req: Request, res: Response) => {
  try {
    const { Nom, Responsable, Activité } = req.body;
    const agency = new Agency({
      Nom,
      Responsable,
      Activité,
    });
    agency.save().then(() => {
      res.json({
        message: "Agency created !",
      });
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

exports.retriveAll = async (req: Request, res: Response) => {
  try {
    Agency.find().then((agencies: IAgency[]) => {
      console.log(agencies);
      res.json({
        agencies,
      });
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
