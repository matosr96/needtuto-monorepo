"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = void 0;
const tslib_1 = require("tslib");
const types_1 = require("@needtuto/types");
const constant_definitions_1 = require("@needtuto/constant-definitions");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const dotenv = tslib_1.__importStar(require("dotenv"));
dotenv.config();
const userLogin = async ({ password, username, }) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.USERS, types_1.UserSchemaMongo);
    const user = await model.findOne({ username: username });
    if (!user) {
        return new Error("Usuario no existe o esta inactivo");
    }
    const match = await bcrypt_1.default.compare(password || "", user.password);
    if (!match) {
        return new Error("Contrasena incorrecta");
    }
    const token = jsonwebtoken_1.default.sign({ uuid: user.uuid }, process.env.JWT_SIGNIN_KEY || "", { expiresIn: "5h" });
    return {
        token,
        ...user._doc,
    };
};
exports.userLogin = userLogin;
//# sourceMappingURL=login.js.map