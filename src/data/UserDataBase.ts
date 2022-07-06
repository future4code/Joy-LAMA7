import { User } from "../model/users";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
    public insertUser = async (user: User): Promise<void> => {
        try {
            await UserDataBase
                .connection('LAMA_USUARIOS')
                .insert(user);
        } catch (error: any) {
            throw new Error(error.message);
        };
    };

    public selectUserByEmail = async (email: string): Promise<User> => {
        try {
            const user: User[] = await UserDataBase
                .connection('LAMA_USUARIOS')
                .where({ email });

            return user[0];
        } catch (error: any) {
            throw new Error(error.message);
        };
    };
};