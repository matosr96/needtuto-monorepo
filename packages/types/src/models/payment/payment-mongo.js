"use strict";
exports.__esModule = true;
exports.PaymentSchemaMongo = void 0;
var mongoose_1 = require("mongoose");
exports.PaymentSchemaMongo = new mongoose_1.Schema({
    uuid: { type: String, required: true, unique: true },
    user: { type: String, required: true },
    bank: { type: String, required: true, unique: true },
    account_type: { type: String, required: true },
    account_number: { type: String, required: true },
    status: { type: String, required: false, "default": "active" }
}, {
    versionKey: false,
    timestamps: true
});
