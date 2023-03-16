import { User } from "@needtuto/types";
type UserPartial = Partial<User>;
interface UserLogin extends UserPartial {
    token: string;
}
export declare const userLogin: ({ password, username, }: UserPartial) => Promise<UserLogin | Error>;
export {};
