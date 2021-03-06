const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

import { IRequestSignup, IUser } from "../types";
import { Response } from "express";

exports.signup = async (req: IRequestSignup, res: Response) => {
  const { password, email } = req.body;
  const salt = 10;
  bcrypt
    .hash(password, salt)
    .then((hash: any) => {
      const user = new User({ email, password: hash });
      user
        .save()
        .then(() => {
          const token = jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
            expiresIn: "24h",
          });

          return res
            .status(201)
            .json({ message: "User created !", userId: user._id, token });
        })
        .catch((error: any) => res.status(400).json({ error }));
    })
    .catch((error: any) => res.status(500).json({ error }));
};

exports.signin = async (req: IRequestSignup, res: Response) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user: IUser) => {
      if (!user) {
        return res.status(401).json({ error: "user not found" });
      }
      bcrypt
        .compare(password, user.password)
        .then((valid: boolean) => {
          if (!valid) {
            return res.status(401).json({ error: "wrong password" });
          }
          const token = jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
            expiresIn: "24h",
          });
          res.status(200).json({
            userId: user._id,
            token,
          });
        })
        .catch((error: any) => res.status(500).json({ error }));
    })
    .catch((error: any) => res.status(500).json({ error }));
};
