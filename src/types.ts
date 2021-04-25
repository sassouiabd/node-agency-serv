import mongoose from "mongoose";

export interface IAgency {
  _id?: string;
  Nom: string;
  Responsable: string;
  Activité: string;
  __v?: number;
}

export interface IAgencySchema extends mongoose.Schema {
  Nom: {
    type: string;
    required: boolean;
  };
  Responsable: {
    type: string;
    required: boolean;
  };
  Activité: {
    type: string;
    required: boolean;
  };
}

export interface IUser {
  _id?: string;
  email: string;
  password: string;
  __v?: number;
}

export interface IRequestSignup extends Express.Request {
  body: {
    email: string;
    password: string;
  };
}
