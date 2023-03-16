import { User, UserSchemaMongo } from "@needtuto/types";
import { getModel, Collection } from "@needtuto/constant-definitions";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';

type UserPartial = Partial<User>;
dotenv.config();

interface UserLogin extends UserPartial {
  token: string;
}

export const userLogin = async ({
  password,
  username,
}: UserPartial): Promise<UserLogin | Error> => {
  const model = await getModel(Collection.USERS, UserSchemaMongo);

  const user = await model.findOne({ username: username });

  if (!user) {
    return new Error("Usuario no existe o esta inactivo");
  }

  const match = await bcrypt.compare(password || "", user.password);

  if (!match) {
    return new Error("Contrasena incorrecta");
  }

  const token = jwt.sign(
    { uuid: user.uuid },
    process.env.JWT_SIGNIN_KEY || "",
    { expiresIn: "5h" }
  );

  return {
    token,
    ...user._doc,
  };
};
