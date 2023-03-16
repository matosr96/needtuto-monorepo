"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const types_1 = require("@needtuto/types");
const constant_definitions_1 = require("@needtuto/constant-definitions");
const getUserById = async (uuid) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.USERS, types_1.UserSchemaMongo);
    const user = (await model.findOne({ uuid: uuid }));
    return user;
};
exports.getUserById = getUserById;
//# sourceMappingURL=get-by-id.js.map