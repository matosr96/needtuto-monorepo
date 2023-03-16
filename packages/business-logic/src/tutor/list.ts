import { Tutor, TutorSchemaMongo } from "@needtuto/types";
import { getModel, Collection } from "@needtuto/constant-definitions";

export const getTutorById = async (user: string): Promise<Tutor[]> => {
  const model = await getModel(Collection.TUTOR, TutorSchemaMongo);
  const tutor = (await model.find({ user: user })) as Tutor[];
  return tutor;
};
