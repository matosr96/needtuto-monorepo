import { Schema } from "mongoose";
import { Payment } from "./payment";

export const PaymentSchemaMongo = new Schema<Payment>(
  {
    uuid: { type: String, required: true, unique: true },
    user: { type: String, required: true },
    bank: { type: String, required: true, unique: true },
    account_type: { type: String, required: true },
    account_number: { type: String, required: true },
    status: { type: String, required: false, default: "active" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
