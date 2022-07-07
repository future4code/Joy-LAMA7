enum DaysOfWeek {
    SEXTA = "Sexta",
    SABADO = "Sábado",
    DOMINGO = "Domingo"
};

export type Show = {
    id: string,
    weekDay: DaysOfWeek,
    startTime: number,
    endtime: number,
    bandId: string 
}

export interface ShowInputDTO {
    weekDay: DaysOfWeek,
    startTime: number,
    endtime: number,
    bandId: string 
    token: string 
}