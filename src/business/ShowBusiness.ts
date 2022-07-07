import { ShowDatabase } from "../data/ShowDatabase"
import { InvalidInput, InvalidTime, InvalidToken } from "../errors/CustomError"
import { Show, ShowInputDTO } from "../model/show"
import generateID from "../services/generateID"
import { TokenManager } from "../services/TokenManager"

const showDB = new ShowDatabase()
const tokenManager = new TokenManager()

export class ShowBusiness {

    public createShow = async (input: ShowInputDTO) => {
        try{
            const {weekDay, startTime, endtime, bandId, token} = input

            if (!weekDay || !startTime || !endtime || !bandId || !token) {
                throw new InvalidInput()
            }

            if (startTime < 8 || endtime > 23 ) {
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
                endtime,
                bandId
            }

            await showDB.insertShow(show)

        }catch (err: any) {
            throw new Error(err.message)
        }
    }
}