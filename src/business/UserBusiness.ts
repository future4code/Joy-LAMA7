import { UserDataBase } from "../data/UserDataBase";
import { CustomError, InvalidInput, InvalidPassword, UserNotFound } from "../errors/CustomError";
import { LoginInputDTO, SignupInputDTO, User } from "../model/users";
import generateID from "../services/generateID";
import { HashManager } from "../services/HashManager";
import { TokenManager } from "../services/TokenManager";

const userDB = new UserDataBase();
const hashManager = new HashManager();
const tokenManager = new TokenManager();

export class UserBusiness {
    public signup = async (input: SignupInputDTO): Promise<string> => {
        try {

            const { name, email, password, role } = input;

            if (!name || !email || !password || !role) {
                throw new InvalidInput();
            };

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
            throw new CustomError(error.statusCode, error.message);
        };
    };

    public login = async (input: LoginInputDTO): Promise<string> => {
        try {

            const { email, password } = input;

            if (!email || !password) {
                throw new InvalidInput();
            };

            const user = await userDB.selectUserByEmail(input.email);

            if (!user) {
                throw new UserNotFound();
            };

            const isValid = await hashManager.verifyHash(input.password, user.password);

            if (!isValid) {
                throw new InvalidPassword();
            };

            const token = tokenManager.generateToken({ id: user.id });

            return token;
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        };
    };
};