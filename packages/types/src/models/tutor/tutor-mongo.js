"use strict";
exports.__esModule = true;
exports.TutorSchemaMongo = void 0;
var mongoose_1 = require("mongoose");
exports.TutorSchemaMongo = new mongoose_1.Schema({
    uuid: { type: String, required: true, unique: true },
    user: { type: String, required: true },
    identification_card: { type: String, required: true, unique: true },
    name_university: { type: String, required: true },
    name_career: { type: String, required: true },
    state_career: { type: String, required: true },
    semestre: { type: Number },
    account_number: { type: String, required: true },
    account_type: { type: String, required: true },
    name_bank: { type: String, required: true },
    status: { type: String, required: false, "default": "active" }
}, {
    versionKey: false,
    timestamps: true
});
