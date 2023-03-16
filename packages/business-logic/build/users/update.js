"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const types_1 = require("@needtuto/types");
const constant_definitions_1 = require("@needtuto/constant-definitions");
const updateUser = async (uuid, name, lastname, age, city, phone, email, photo, username, password) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.USERS, types_1.UserSchemaMongo);
    const user = await model.findOne({ uuid: uuid });
    if (!user) {
        throw new Error("No se encontro el usuario");
    }
    user.name = name ? name : user.name;
    user.lastname = lastname ? lastname : user.lastname;
    user.age = age ? age : user.age;
    user.city = city ? city : user.city;
    user.phone = phone ? phone : user.phone;
    user.email = email ? email : user.email;
    user.photo = photo ? photo : user.photo;
    user.username = username ? username : user.username;
    user.password = password ? password : user.password;
    console.log(user);
    await user.save();
    const result = (await model.findOne({ uuid: uuid }));
    return result;
};
exports.updateUser = updateUser;
//# sourceMappingURL=update.js.map