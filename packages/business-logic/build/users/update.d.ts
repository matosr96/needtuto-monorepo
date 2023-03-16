import { User } from "@needtuto/types";
export declare const updateUser: (uuid: string, name: string, lastname: string, age: number, city: string, phone: string, email: string, photo: string, username: string, password: string) => Promise<User | Error>;
