import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { GetShowInputDTO, ShowInputDTO } from "../model/show";

const showBusiness = new ShowBusiness()

export class ShowController {

    public createShow = async (
        req: Request,
        res: Response
    ) => {
        try {

            const { weekDay, startTime, endTime, bandId } = req.body
            const token = req.headers.authorization as string

            const input: ShowInputDTO = {
                weekDay,
                startTime,
                endTime,
                bandId,
                token
            }

            await showBusiness.createShow(input)

            res.send('Registered Show✅')

        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage);
        }
    }

    public selectAllShowsOfDate = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { weekDay } = req.body
            const token = req.headers.authorization as string

            const input: GetShowInputDTO = {
                weekDay,
                token
            }
            const shows = await showBusiness.selectAllShowsOfDate(input)

            res.status(200).send({ shows });

        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage);
        }
    };
}