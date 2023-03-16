import { User, UserSchemaMongo } from "@needtuto/types";
import { getModel, Collection } from "@needtuto/constant-definitions";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

type UserPartial = Partial<User>;

export const userRegister = async ({
  name,
  lastname,
  age,
  city,
  phone,
  email,
  photo,
  username,
  password,
}: UserPartial): Promise<User | Error> => {
  const model = await getModel(Collection.USERS, UserSchemaMongo);

  const user = await model.findOne({ email: email });

  if (user) {
    return new Error("El correo ya esta rgistrado");
  }

  const uuid = uuidv4();
  const new_password = bcrypt.hashSync(password || "", 10);

  const new_user = new model({
    uuid,
    name,
    lastname,
    age,
    city,
    phone,
    email,
    photo,
    username,
    password: new_password,
  });
  await new_user.save();

  return { ...new_user._doc };
};
