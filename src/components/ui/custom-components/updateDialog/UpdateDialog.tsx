import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../../form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../select";
import { Textarea } from "../../textarea";
import { useForm } from "react-hook-form";
import { useUpdateBookMutation } from "@/redux/api/baseApi";
import { toast } from "react-toastify";

export function UpdateDialog({ book }) {
    const [open, setOpen] = useState(false)
    const [updateBook] = useUpdateBookMutation();

    const form = useForm({
        defaultValues: {
            title: "",
            author: "",
            genre: "",
            isbn: "",
            description: "",
            copies: ""
        }
    });

    useEffect(() => {
        if (book) {
            form.reset({
                title: book.title,
                author: book.author,
                genre: book.genre,
                isbn: book.isbn,
                description: book.description,
                copies: book.copies
            });
        }
    }, [book, form]);

    const onSubmit = async (data) => {
        const updatedBookData = {
            ...data,
            _id: book._id
        };

        try {
            const result = await updateBook(updatedBookData).unwrap();
            console.log("Book updated successfully", result);
            if (result.success === true) {
                toast.success("Book updated successfully")
                form.reset()
                 setOpen(false)
            }
        } catch (error) {
            console.error("Update failed:", error);
            toast.error(error.data.message)
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">Update</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Book</DialogTitle>
                    <DialogDescription>
                        Make changes to the book. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Book Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter book name" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="author"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Author</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter book author name" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="genre"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Genre</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select a genre" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="FICTION">FICTION</SelectItem>
                                            <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                                            <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                                            <SelectItem value="HISTORY">HISTORY</SelectItem>
                                            <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                                            <SelectItem value="FANTASY">FANTASY</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="isbn"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ISBN</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter book ISBN" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Enter description" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="copies"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Copies</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Enter number of copies" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <Button className="w-full" type="submit">Update Book</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
