"use strict";
exports.__esModule = true;
exports.AreaSchemaMongo = void 0;
var mongoose_1 = require("mongoose");
exports.AreaSchemaMongo = new mongoose_1.Schema({
    uuid: { type: String, required: true, unique: true },
    user: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },
    category: { type: String, required: true, unique: true },
    hour_value: { type: Number, required: true },
    tutoring_type: { type: String, required: true },
    status: { type: String, required: false, "default": "active" }
}, {
    versionKey: false,
    timestamps: true
});
