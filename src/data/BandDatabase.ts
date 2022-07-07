import { Band } from "../model/band";
import { BaseDataBase } from "./BaseDataBase";

export class BandDatabase extends BaseDataBase {

    public insertBand = async (
        band: Band
    ) => {
        try {
            await BandDatabase.connection('LAMA_BANDAS')
                .insert({
                    id: band.id,
                    name: band.name,
                    music_genre: band.musicGenre,
                    responsible: band.responsible
                })
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public getBand = async (
        id: string
    ) => {
        try {
            const band = await BandDatabase.connection('LAMA_BANDAS')
                .select('*')
                .where({ id })

            return band
        } catch (err: any) {
            throw new Error(err.message)
        }
    }
}