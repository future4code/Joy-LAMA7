import { Show } from "../model/show";
import { BaseDataBase } from "./BaseDataBase";

export class ShowDatabase extends BaseDataBase {

    public insertShow = async (
        show: Show
    ) => {
        console.log(show)
        try {
            await ShowDatabase.connection('LAMA_SHOWS')
                .insert({
                    id: show.id,
                    week_day: show.weekDay,
                    start_time: show.startTime,
                    end_time: show.endTime,
                    band_id: show.bandId
                })
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public selectAllShowsOfDate = async (
        weekDay: string
    ) => {
        try {
            const result = await ShowDatabase
                .connection({ S: "LAMA_SHOWS" })
                .innerJoin(
                    { B: "LAMA_BANDAS" },
                    "S.band_id",
                    "B.id"
                )
                .select(
                    'B.name',
                    'B.music_genre'
                )
                .where("S.week_day", weekDay)
                .orderBy("S.start_time", "asc");

            return result;
        } catch (error: any) {
            throw new Error(error.message)
        };
    };
}