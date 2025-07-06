import { useGetBooksQuery } from "@/redux/api/baseApi";
import { Button } from "../../button";
import BookCard from "../BookCard/BookCard";
import CardSkeleton from "../card-skeleton/CardSkeleton.js";
import { Link } from "react-router";

const BookSection = () => {
    const { data, isLoading, isError } = useGetBooksQuery(undefined)
    const books = data;

    console.log("Data", books, "isloaidng", isLoading, "isError", isError);
    return (
        <div className="my-6 space-y-4">
            <div className="flex gap-2 justify-between">
                <h2 className="text-xl md:text-2xl font-semibold">Discover Your Next Book</h2>
                <Link to='/books'><Button>View All</Button></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {
                    isLoading ?
                        [...Array(6)].map(item => <CardSkeleton />)
                        :
                        books?.data.slice(0, 6).map(book => <BookCard key={book._id} book={book} />)
                }
            </div>
        </div>
    );
};

export default BookSection;