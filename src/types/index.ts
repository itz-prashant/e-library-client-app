export interface Book{
    _id: string;
    title: string;
    author: Author;
    coverImage: string;
    file:string;
    genre:string
}

export type Author = {
    name: string
}