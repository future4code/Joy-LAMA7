import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { ShowInputDTO } from "../model/show";

const showBusiness = new ShowBusiness()

export class ShowController {

    public createShow = async (
        req: Request,
        res: Response
    ) => {
        try{

            const {weekDay, startTime, endtime, bandId} = req.body
            const token = req.headers.authorization as string

            const input:ShowInputDTO = {
                weekDay,
                startTime,
                endtime,
                bandId,
                token
            }

            await showBusiness.createShow(input)

            res.send('Show Criado ✅')

        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage);
        }
    }

}