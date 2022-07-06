import { User } from "../model/users";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
    public insertUser = async (user: User): Promise<void> => {
        try {
            await UserDataBase
                .connection('Users')
                .insert(user);
        } catch (error: any) {
            throw new Error(error.message);
        };
    };
};