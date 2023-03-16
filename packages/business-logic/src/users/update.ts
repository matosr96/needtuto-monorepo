import { User, UserSchemaMongo } from "@needtuto/types";
import { getModel, Collection } from "@needtuto/constant-definitions";

export const updateUser = async (
  uuid: string,
  name: string,
  lastname: string,
  age: number,
  city: string,
  phone: string,
  email: string,
  photo: string,
  username: string,
  password: string
): Promise<User | Error> => {
  const model = await getModel(Collection.USERS, UserSchemaMongo);
  const user = await model.findOne({ uuid: uuid });

  if (!user) {
    throw new Error("No se encontro el usuario");
  }

  user.name = name ? name : user.name;
  user.lastname = lastname ? lastname : user.lastname;
  user.age = age ? age : user.age;
  user.city = city ? city : user.city;
  user.phone = phone ? phone : user.phone;
  user.email = email ? email : user.email;
  user.photo = photo ? photo : user.photo;
  user.username = username ? username : user.username;
  user.password = password ? password : user.password;

  console.log(user);

  await user.save();

  const result = (await model.findOne({ uuid: uuid })) as User;

  return result;
};
