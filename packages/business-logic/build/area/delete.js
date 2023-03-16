"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteManyAreas = exports.deleteArea = void 0;
const types_1 = require("@needtuto/types");
const constant_definitions_1 = require("@needtuto/constant-definitions");
const deleteArea = async (uuid, status) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.AREAS, types_1.AreaSchemaMongo);
    const area = await model.findOne({ uuid: uuid });
    if (!area) {
        throw new Error("No se encontro el area");
    }
    area.status = status;
    await area.save();
    return true;
};
exports.deleteArea = deleteArea;
const deleteManyAreas = async (uuid, status) => {
    uuid.map(async (uuid) => {
        const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.AREAS, types_1.AreaSchemaMongo);
        const area = await model.findOne({ uuid: uuid });
        if (!area) {
            throw new Error("No se encontro");
        }
        area.status = status;
        await area.save();
    });
    return true;
};
exports.deleteManyAreas = deleteManyAreas;
//# sourceMappingURL=delete.js.map