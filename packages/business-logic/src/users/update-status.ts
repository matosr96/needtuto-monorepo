import { User, UserSchemaMongo } from "@needtuto/types";
import { getModel, Collection } from "@needtuto/constant-definitions";

export const updateStatusUser = async (
  uuid: string,
  status: string,
): Promise<User | Error> => {
  const model = await getModel(Collection.USERS, UserSchemaMongo);
  const user = await model.findOne({ uuid: uuid });

  if (!user) {
    throw new Error("No se encontro el usuario");
  }

  user.status = status;
  console.log(user)

  await user.save();

  const result = await model.findOne({ uuid: uuid }) as User;

  return result;
};
