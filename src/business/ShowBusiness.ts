import { ShowDatabase } from "../data/ShowDatabase"
import { CustomError, InvalidInput, InvalidTime, InvalidToken, ShowDayNotFound } from "../errors/CustomError"
import { GetShowInputDTO, Show, ShowInputDTO } from "../model/show"
import generateID from "../services/generateID"
import { TokenManager } from "../services/TokenManager"

const showDB = new ShowDatabase()
const tokenManager = new TokenManager()

export class ShowBusiness {

    public createShow = async (input: ShowInputDTO) => {
        try {
            const { weekDay, startTime, endTime, bandId, token } = input

            if (!weekDay || !startTime || !endTime || !bandId || !token) {
                throw new InvalidInput()
            }

            if (startTime < 8 || endTime > 23) {
                throw new InvalidTime()
            }

            const tokenVerify = tokenManager.verifyToken(token)

            if (!tokenVerify) {
                throw new InvalidToken()
            }

            const id: string = generateID()

            const show: Show = {
                id,
                weekDay,
                startTime,
                endTime,
                bandId
            }

            await showDB.insertShow(show)

        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public selectAllShowsOfDate = async (
        input: GetShowInputDTO
    ) => {
        try {

            const { weekDay, token } = input;

            if (!weekDay || !token) {
                throw new InvalidInput()
            }

            if (weekDay !== 'Sexta' && weekDay !== 'Sábado' && weekDay !== 'Domingo' ){
                throw new ShowDayNotFound();
            }

            const tokenVerify = tokenManager.verifyToken(token)

            if (!tokenVerify) {
                throw new InvalidToken();
            }

            const shows = await showDB.selectAllShowsOfDate(weekDay)

            return shows;

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    };
}