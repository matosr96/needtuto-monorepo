import { Schema } from "mongoose";
import { Area } from "./area";

export const AreaSchemaMongo = new Schema<Area>(
  {
    uuid: { type: String, required: true, unique: true },
    user: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },
    category: { type: String, required: true, unique: true },
    hour_value: { type: Number, required: true },
    tutoring_type: { type: String, required: true },
    status: { type: String, required: false, default: "active" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
