import BookCard from "@/components/ui/custom-components/BookCard/BookCard";
import CardSkeleton from "@/components/ui/custom-components/card-skeleton/CardSkeleton";
import { useGetBooksQuery } from "@/redux/api/baseApi";

const AllBooks = () => {
    const { data, isLoading, isError } = useGetBooksQuery(undefined)
    const books = data;

    console.log("Data", books, "isloaidng", isLoading, "isError", isError);
    return (
        <div className="my-6 space-y-4">
            <div className="flex gap-2 justify-between">
                <h2 className="text-xl md:text-2xl font-semibold">Discover Your Next Book</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    isLoading ?
                        [...Array(4)].map(item => <CardSkeleton key={item?._id} />)
                        :
                        books?.data.map(book => <BookCard key={book._id} book={book} />)
                }
            </div>
        </div>
    );
};

export default AllBooks;