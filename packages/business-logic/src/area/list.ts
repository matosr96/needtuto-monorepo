import { Area, AreaSchemaMongo } from "@needtuto/types";
import { getModel, Collection } from "@needtuto/constant-definitions";

export const getAreasById = async (user: string): Promise<Area[]> => {
  const model = await getModel(Collection.AREAS, AreaSchemaMongo);
  const areas = (await model.find({ user: user })) as Area[];
  return areas;
};
