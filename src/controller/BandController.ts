import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { BandInputDTO, GetBandInputDTO } from "../model/band";

const bandBusiness = new BandBusiness()

export class BandController {

    public createBand = async (
        req: Request,
        res: Response
    ) => {
        try {

            const { name, musicGenre, responsible } = req.body
            const token = req.headers.authorization as string

            const input: BandInputDTO = {
                name,
                musicGenre,
                responsible,
                token
            }

            await bandBusiness.createBand(input)

            res.send('Registered Band✅')

        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage);
        }
    }

    public getBand = async (
        req: Request,
        res: Response
    ) => {
        try {
            const input: GetBandInputDTO = {
                id: req.params.id,
                token: req.headers.authorization as string
            }

            const band = await bandBusiness.getBand(input)

            res.send(band)

        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage);
        }

    }
}