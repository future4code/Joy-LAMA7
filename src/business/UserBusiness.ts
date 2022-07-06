import { UserDataBase } from "../data/UserDataBase";
import { SignupInputDTO, User } from "../model/users";
import generateID from "../services/generateID";
import { HashManager } from "../services/HashManager";
import { TokenManager } from "../services/TokenManager";

const userDB = new UserDataBase();
const hashManager = new HashManager();
const tokenManager = new TokenManager();

export class UserBusiness {
    public signup = async (input: SignupInputDTO): Promise<string> => {
        try {

            const id: string = generateID();

            const hashPassword: string = await hashManager.generateHash(input.password);

            const user: User = {
                id,
                name: input.name,
                email: input.email,
                password: hashPassword,
                role: input.role
            };

            await userDB.insertUser(user);

            const token: string = await tokenManager.generateToken({ id });

            return token;

        } catch (error: any) {
            throw new Error(error.message);
        };
    };
};