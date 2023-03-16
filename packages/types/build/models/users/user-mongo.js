"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchemaMongo = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchemaMongo = new mongoose_1.Schema({
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
}, {
    versionKey: false,
    timestamps: true,
});
//# sourceMappingURL=user-mongo.js.map