import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../../dialog"
import { DialogTrigger } from "@radix-ui/react-dialog"
import type { IBook } from "@/types/types"
import { Form, FormControl, FormField, FormItem, FormLabel } from "../../form"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { Popover, PopoverContent, PopoverTrigger } from "../../popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "../../calendar"
import { cn } from "@/lib/utils"
import { useBorrowBookMutation } from "@/redux/api/baseApi"
import { toast } from "react-toastify"
import { useState } from "react"

interface IProps {
    book: IBook
}

export function BorrowDialog({ book }: IProps) {
     const [open, setOpen] = useState(false)
    const form = useForm()
    const [borrowBook, { isLoading, isError }] = useBorrowBookMutation()

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);
        const borrowBookData = {
            book: book._id,
            ...data
        }
        console.log(borrowBookData);

        try {
            const result = await borrowBook(borrowBookData).unwrap()
            console.log(result);
            if (result.data._id) {
                toast.success("Book borrowed successfully!")
                setOpen(false)
                form.reset()
            }

        } catch (error) {
            console.log(error);
            toast.error(error.data.message)
        }


    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Borrow</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{book.title}</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)} >

                            <FormField
                                control={form.control}
                                name="quantity"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Number of quantity</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Enter quantity" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="dueDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Select Due Date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            " pl-3 text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    // disabled={(date) =>
                                                    //     date > new Date() || date < new Date("1900-01-01")
                                                    // }
                                                    captionLayout="dropdown"
                                                />
                                            </PopoverContent>
                                        </Popover>

                                    </FormItem>
                                )}
                            />

                            <Button className="w-full" type="submit">Borrow Book</Button>
                        </form>
                    </Form>
                    {/* <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter> */}
                </DialogContent>
            </form>
        </Dialog>
    )
}
