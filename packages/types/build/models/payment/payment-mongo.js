"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentSchemaMongo = void 0;
const mongoose_1 = require("mongoose");
exports.PaymentSchemaMongo = new mongoose_1.Schema({
    uuid: { type: String, required: true, unique: true },
    user: { type: String, required: true },
    bank: { type: String, required: true, unique: true },
    account_type: { type: String, required: true },
    account_number: { type: String, required: true },
    status: { type: String, required: false, default: "active" },
}, {
    versionKey: false,
    timestamps: true,
});
//# sourceMappingURL=payment-mongo.js.map