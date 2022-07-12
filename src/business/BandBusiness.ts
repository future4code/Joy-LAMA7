import { BandDatabase } from "../data/BandDatabase"
import { InvalidInput, InvalidToken } from "../errors/CustomError"
import { Band, BandInputDTO, GetBandInputDTO } from "../model/band"
import generateID from "../services/generateID"
import { TokenManager } from "../services/TokenManager"

const bandDB = new BandDatabase()
const tokenManager = new TokenManager()

export class BandBusiness {

    public createBand = async (input: BandInputDTO) => {
        try {
            const { name, musicGenre, responsible, token } = input

            if (!name || !musicGenre || !responsible || !token) {
                throw new InvalidInput()
            }

            const tokenVerify = tokenManager.verifyToken(token)

            if (!tokenVerify) {
                throw new InvalidToken()
            }

            const id: string = generateID()

            const band: Band = {
                id,
                name,
                musicGenre,
                responsible
            }

            await bandDB.insertBand(band)

        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public getBand = async (input: GetBandInputDTO) => {
        try {
            const { id, token } = input

            if (!id || !token) {
                throw new InvalidInput()
            }

            const tokenVerify = tokenManager.verifyToken(token)

            if (!tokenVerify) {
                throw new InvalidToken()
            }

            const band = await bandDB.getBand(id)
            return band

        } catch (err: any) {
            throw new Error(err.message)
        }
    }

}