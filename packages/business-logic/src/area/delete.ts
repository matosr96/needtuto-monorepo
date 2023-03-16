import { AreaSchemaMongo } from "@needtuto/types";
import { getModel, Collection } from "@needtuto/constant-definitions";

export const deleteArea = async (
  uuid: String,
  status: String
): Promise<Boolean | Error> => {
  const model = await getModel(Collection.AREAS, AreaSchemaMongo);
  const area = await model.findOne({ uuid: uuid });

  if (!area) {
    throw new Error("No se encontro el area");
  }

  area.status = status;
  await area.save();
  return true;
};

export const deleteManyAreas = async (
  uuid: string[],
  status: string
): Promise<Boolean | Error> => {
  uuid.map(async (uuid) => {
    const model = await getModel(Collection.AREAS, AreaSchemaMongo);
    const area = await model.findOne({ uuid: uuid });

    if (!area) {
      throw new Error("No se encontro");
    }

    area.status = status;
    await area.save();
  });
  return true;
};
