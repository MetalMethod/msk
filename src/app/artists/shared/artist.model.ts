/// Model for artist
export interface IArtist{
    id: string
    name: string
    genre: string
    description?: string
    country?: string
    imageUrl?: string
    link?: string
    songs? :{
        song1?: string
        song2?: string
    }
    album?: string
    user: string
    dateAdded: Date
}

