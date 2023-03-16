import { Schema } from "mongoose";
import { User } from "./user";

export const UserSchemaMongo = new Schema<User>(
  {
    uuid: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    photo: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: String, required: false, default: "active" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
