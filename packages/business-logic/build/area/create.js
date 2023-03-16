"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createArea = void 0;
const types_1 = require("@needtuto/types");
const constant_definitions_1 = require("@needtuto/constant-definitions");
const uuid_1 = require("uuid");
const createArea = async (data) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.AREAS, types_1.AreaSchemaMongo);
    const uuid = (0, uuid_1.v4)();
    const area = new model({ ...data, uuid });
    if (!area) {
        throw new Error("No se pudo crear el area");
    }
    await area.save();
    const result = (await model.findOne({ uuid: uuid }));
    return result;
};
exports.createArea = createArea;
//# sourceMappingURL=create.js.map