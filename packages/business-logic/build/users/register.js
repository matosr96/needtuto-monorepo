"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRegister = void 0;
const tslib_1 = require("tslib");
const types_1 = require("@needtuto/types");
const constant_definitions_1 = require("@needtuto/constant-definitions");
const uuid_1 = require("uuid");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const userRegister = async ({ name, lastname, age, city, phone, email, photo, username, password, }) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.USERS, types_1.UserSchemaMongo);
    const user = await model.findOne({ email: email });
    if (user) {
        return new Error("El correo ya esta rgistrado");
    }
    const uuid = (0, uuid_1.v4)();
    const new_password = bcrypt_1.default.hashSync(password || "", 10);
    const new_user = new model({
        uuid,
        name,
        lastname,
        age,
        city,
        phone,
        email,
        photo,
        username,
        password: new_password,
    });
    await new_user.save();
    return { ...new_user._doc };
};
exports.userRegister = userRegister;
//# sourceMappingURL=register.js.map