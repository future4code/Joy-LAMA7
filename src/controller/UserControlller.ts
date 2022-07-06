import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { SignupInputDTO } from "../model/users";

const userBusiness = new UserBusiness();

export class UserController {
    public signup = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { name, email, password, role } = req.body;

            const user: SignupInputDTO = {
                name,
                email,
                password,
                role
            };

            const token = await userBusiness.signup(user);

            res.status(201).send({ message: "Usuário criado", token });

        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
        };
    };
};