"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAreasById = void 0;
const types_1 = require("@needtuto/types");
const constant_definitions_1 = require("@needtuto/constant-definitions");
const getAreasById = async (user) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.AREAS, types_1.AreaSchemaMongo);
    const areas = (await model.find({ user: user }));
    return areas;
};
exports.getAreasById = getAreasById;
//# sourceMappingURL=list.js.map