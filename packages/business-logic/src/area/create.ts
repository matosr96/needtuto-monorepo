import { Area, AreaSchemaMongo } from "@needtuto/types";
import { getModel, Collection } from "@needtuto/constant-definitions";
import { v4 as uuidv4 } from "uuid";

export const createArea = async (data: Area): Promise<Area | Error> => {
  const model = await getModel(Collection.AREAS, AreaSchemaMongo);
  const uuid = uuidv4();
  const area = new model({ ...data, uuid });
  if (!area) {
    throw new Error("No se pudo crear el area");
  }
  await area.save();
  const result = (await model.findOne({ uuid: uuid })) as Area;
  return result;
};
