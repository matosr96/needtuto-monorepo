import { Tutor, TutorSchemaMongo } from "@needtuto/types";
import { getModel, Collection } from "@needtuto/constant-definitions";
import { v4 as uuidv4 } from "uuid";

export const createTutor = async (data: Tutor): Promise<Tutor | Error> => {
  const model = await getModel(Collection.TUTOR, TutorSchemaMongo);
  const uuid = uuidv4();

  const tutor = new model({ ...data, uuid });

  if (!tutor) {
    throw new Error("No se pudo crear el producto");
  }

  await tutor.save();

  const result = (await model.findOne({ uuid: uuid })) as Tutor;

  return result;
};
