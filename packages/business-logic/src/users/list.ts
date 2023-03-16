import { User, UserSchemaMongo } from "@needtuto/types";
import { getModel, Collection } from "@needtuto/constant-definitions";

export const getUsers = async (uuid: string): Promise<User[]> => {
  const model = await getModel(Collection.USERS, UserSchemaMongo);
  const users = (await model.find()) as User[];
  return users;
};
