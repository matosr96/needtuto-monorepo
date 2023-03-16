"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTutorById = void 0;
const types_1 = require("@needtuto/types");
const constant_definitions_1 = require("@needtuto/constant-definitions");
const getTutorById = async (user) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.TUTOR, types_1.TutorSchemaMongo);
    const tutor = (await model.find({ user: user }));
    return tutor;
};
exports.getTutorById = getTutorById;
//# sourceMappingURL=list.js.map