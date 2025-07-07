import { useDeleteBookMutation, useGetBooksQuery } from '@/redux/api/baseApi';
import type { ColumnDef } from "@tanstack/react-table";
import type { IBook } from '@/types/types';
import { DataTable } from '@/components/ui/custom-components/data-table/DataTable';
import { BookDetailsDialog } from '@/components/ui/custom-components/bookDetailsDialog/BookDetailsDialog';
import { UpdateDialog } from '@/components/ui/custom-components/updateDialog/UpdateDialog';
import { BorrowDialog } from '@/components/ui/custom-components/borrowDialog/BorrowDialog';
import { toast } from 'react-toastify';
import { Button } from '@/components/ui/button';


const Books = () => {
    const { data, isLoading } = useGetBooksQuery(undefined);
    const books: IBook[] = data?.data || [];
    const [deleteBook] = useDeleteBookMutation()
    const handleDelete = async (data) => {
        console.log(data);
        try {
            const result = await deleteBook(data).unwrap();
            console.log("Delete result ", result);
            if (result.success === true) {
                toast.success("Book deleted successfully!")
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const columns: ColumnDef<IBook>[] = [
        {
            accessorKey: "title",
            header: "Title",
        },
        {
            accessorKey: "author",
            header: "Author",
        },
        {
            accessorKey: "genre",
            header: "Genre",
        },
        {
            accessorKey: "isbn",
            header: "ISBN",
        },
        {
            accessorKey: "copies",
            header: "Copies",
        },
        {
            accessorKey: "available",
            header: "Availability",
            cell: ({ row }) => {
                const available = row.original.available;
                return (
                    <span className={available ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
                        {available ? "Stock In" : "Stock Out"}
                    </span>
                );
            },
        },
        {
            header: "Action",
            id: "actions", // important to use `id` if not using `accessorKey`
            cell: ({ row }) => {
                const book = row.original;

                return (
                    <div className="flex gap-2">
                        <BookDetailsDialog book={book}></BookDetailsDialog>
                        <UpdateDialog book={book}></UpdateDialog>
                        <BorrowDialog book={book}></BorrowDialog>
                        <Button

                            onClick={() => handleDelete(book._id)}
                            variant={'outline'}
                        >
                            Delete
                        </Button>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="p-4">
            <h2 className=' text-xl md:text-2xl font-semibold text-center mb-2'>All Books</h2>
            {
                isLoading ? <p>Loading...</p> : <DataTable columns={columns} data={books} />
            }
        </div>
    );
};

export default Books;
