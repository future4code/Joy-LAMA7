enum DaysOfWeek {
    SEXTA = "Sexta",
    SABADO = "Sábado",
    DOMINGO = "Domingo"
};

export type Show = {
    id: string,
    weekDay: DaysOfWeek,
    startTime: number,
    endTime: number,
    bandId: string 
};

export interface ShowInputDTO {
    weekDay: DaysOfWeek,
    startTime: number,
    endTime: number,
    bandId: string 
    token: string 
};

export interface GetShowInputDTO {
    weekDay: DaysOfWeek,
    token: string
};