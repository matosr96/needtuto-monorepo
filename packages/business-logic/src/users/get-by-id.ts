import { User, UserSchemaMongo } from "@needtuto/types";
import { getModel, Collection } from "@needtuto/constant-definitions";

export const getUserById = async (uuid: string): Promise<User[]> => {
  const model = await getModel(Collection.USERS, UserSchemaMongo);
  const user = (await model.findOne({ uuid: uuid })) as User[];
  return user;
};
