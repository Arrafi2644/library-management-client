export interface IBook {
    _id?: string;
    title: string;
    author: string,
    genre: "FICTION" | "NON_FICTION" | "SCIENCE" | "HISTORY" | "BIOGRAPHY" | "FANTASY",
    isbn: string,
    description: string,
    copies: number,
    available: boolean,
    createdAt?: Date,
    updatedAt?: Date
}

export interface IBorrow {
   book: string,
   quantity: number,
   dueDate: Date
} 