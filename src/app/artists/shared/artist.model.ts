export interface IArtist{
    id: number
    name: string
    genre: string
    description?: string
    country?: string
    imageUrl?: string
    link?: string
    songs? :{
        song1?: string
        song2?: string
        song3?: string
    }
    user: string
    dateAdded: Date
}

// export interface IReview {
//     id: number
//     rating: number
//     opinion: string
//     referenceUrl: string
//     user: string
//     dateAdded: Date
//     recommendTo: string[]
// }


