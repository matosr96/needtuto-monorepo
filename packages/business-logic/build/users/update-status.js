"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStatusUser = void 0;
const types_1 = require("@needtuto/types");
const constant_definitions_1 = require("@needtuto/constant-definitions");
const updateStatusUser = async (uuid, status) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.USERS, types_1.UserSchemaMongo);
    const user = await model.findOne({ uuid: uuid });
    if (!user) {
        throw new Error("No se encontro el usuario");
    }
    user.status = status;
    console.log(user);
    await user.save();
    const result = await model.findOne({ uuid: uuid });
    return result;
};
exports.updateStatusUser = updateStatusUser;
//# sourceMappingURL=update-status.js.map