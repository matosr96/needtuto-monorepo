import { Area, AreaSchemaMongo } from "@needtuto/types";
import { getModel, Collection } from "@needtuto/constant-definitions";

export const updateArea = async (
  uuid: string,
  name: string,
  description: string,
  category: string,
  hour_value: number,
  tutoring_type: string
): Promise<Area | Error> => {
  const model = await getModel(Collection.AREAS, AreaSchemaMongo);
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

  const result = (await model.findOne({ uuid: uuid })) as Area;

  return result;
};
