import * as bcrypt from "bcryptjs";

export class HashManager {
    public generateHash = async (password: string): Promise<string> => {
        const rounds = Number(process.env.BCRYPT_ROUD);
        const salt = await bcrypt.genSalt(rounds);
        const hash = await bcrypt.hash(password, salt);

        return hash;
    };

    public verifyHash = async (password: string, hash: string): Promise<boolean> => {
        const isValid = await bcrypt.compare(password, hash);

        return isValid;
    };
};