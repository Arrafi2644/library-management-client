import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import type { IBook } from "@/types/types";
import { BookDetailsDialog } from "../bookDetailsDialog/BookDetailsDialog";
import { UpdateDialog } from "../updateDialog/UpdateDialog";
import { BorrowDialog } from "../borrowDialog/BorrowDialog";
import { Button } from "../../button";
import { useDeleteBookMutation } from "@/redux/api/baseApi";
import { toast } from "react-toastify";

interface IProps {
    book: IBook
}

const BookCard = ({ book }: IProps) => {
    const [deleteBook, {isLoading, isError}] = useDeleteBookMutation()
    
    const handleDelete = async(data) => {
        console.log(data);
        try {
            const result = await deleteBook(data).unwrap();
            console.log("Delete result ", result);
            if(result.success === true){
                toast.success("Book deleted successfully!")
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>{book.title}</CardTitle>
                <CardDescription>Genre: {book.genre}</CardDescription>
                <CardDescription>By: {book.author}</CardDescription>
                <CardAction>ISBN: {book.isbn}</CardAction>
            </CardHeader>
            <CardContent className="grow">
                {/* <p>{book.description}</p> */}
                {/* <p>Copies Available: {book.copies}</p> */}
                <p>Status: {book.available ? "Available" : "Not Available"}</p>

            </CardContent>
            <CardFooter className="flex justify-between gap-2">
                <BookDetailsDialog book={book} />
                <UpdateDialog book={book} />
                <BorrowDialog book={book} />
                <Button onClick={()=>handleDelete(book._id)}>Delete</Button>
            </CardFooter>
        </Card>
    );
};

export default BookCard;