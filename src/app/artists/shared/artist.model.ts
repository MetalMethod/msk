export interface IArtist{
    id: number
    name: string
    genre: string
    description?: string
    country?: string
    imageUrl?: string
    links?: {
        linkUrl1?: string
        linkUrls2?: string
        linkUrl3?: string
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


