"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateArea = void 0;
const types_1 = require("@needtuto/types");
const constant_definitions_1 = require("@needtuto/constant-definitions");
const updateArea = async (uuid, name, description, category, hour_value, tutoring_type) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.AREAS, types_1.AreaSchemaMongo);
    const area = await model.findOne({ uuid: uuid });
    if (!area) {
        throw new Error("No se encontro el area");
    }
    area.name = name ? name : area.name;
    area.description = description ? description : area.description;
    area.category = category ? category : area.category;
    area.hour_value = hour_value ? hour_value : area.hour_value;
    area.tutoring_type = tutoring_type ? tutoring_type : area.tutoring_type;
    await area.save();
    const result = (await model.findOne({ uuid: uuid }));
    return result;
};
exports.updateArea = updateArea;
//# sourceMappingURL=update.js.map