import { User } from "@needtuto/types";
type UserPartial = Partial<User>;
export declare const userRegister: ({ name, lastname, age, city, phone, email, photo, username, password, }: UserPartial) => Promise<User | Error>;
export {};
