export type Band = {
    id: string,
    name: string,
    musicGenre: string,
    responsible: string
}

export interface BandInputDTO {
    name: string,
    musicGenre: string,
    responsible: string,
    token: string
}

export interface GetBandInputDTO {
    id: string,
    token: string
}