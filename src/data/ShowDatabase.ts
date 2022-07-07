import { Show } from "../model/show";
import { BaseDataBase } from "./BaseDataBase";

export class ShowDatabase extends BaseDataBase {
    
    public insertShow = async(
        show: Show
    ) => {
        try{
            await ShowDatabase.connection('LAMA_SHOWS')
            .insert(show)
        }catch(err: any) {
            throw new Error(err.message)
        }
    }
}