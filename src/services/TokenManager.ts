import { sign, verify } from "jsonwebtoken";
import { IdUser } from "../model/users";

export class TokenManager {
    public generateToken = (id: IdUser): string => {
        const token = sign(
            { id },
            process.env.JWT_KEY as string,
            { expiresIn: "30min"}
        );

        return token;
    };

    public verifyToken = (token: string): string => {
        const payload = verify(token, process.env.JWT_KEY as string) as any;

        const result = {
            id: payload.id
        };

        return result.id;
    };
};