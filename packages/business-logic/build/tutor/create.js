"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTutor = void 0;
const types_1 = require("@needtuto/types");
const constant_definitions_1 = require("@needtuto/constant-definitions");
const uuid_1 = require("uuid");
const createTutor = async (data) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.TUTOR, types_1.TutorSchemaMongo);
    const uuid = (0, uuid_1.v4)();
    const tutor = new model({ ...data, uuid });
    if (!tutor) {
        throw new Error("No se pudo crear el producto");
    }
    await tutor.save();
    const result = (await model.findOne({ uuid: uuid }));
    return result;
};
exports.createTutor = createTutor;
//# sourceMappingURL=create.js.map