import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../../dialog"
import { DialogTrigger } from "@radix-ui/react-dialog"
import type { IBook } from "@/types/types"

interface IProps {
    book: IBook
}

export function BookDetailsDialog({ book }: IProps) {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Details</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] rounded-2xl shadow-lg px-6 py-5 bg-white dark:bg-gray-900">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                            {book.title}
                        </DialogTitle>
                        <DialogDescription>
                            <div className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                                <div>
                                    <span className="font-semibold">ISBN:</span> {book.isbn}
                                </div>
                                <div>
                                    <span className="font-semibold">Genre:</span> {book.genre}
                                </div>
                                <div>
                                    <span className="font-semibold">Author:</span> {book.author}
                                </div>
                                  <div>
                                    <span className="font-semibold">Available copies:</span> {book.copies}
                                </div>
                                <div>
                                    <span className="font-semibold">Added at:</span> {new Date(book.createdAt).toLocaleString()}
                                </div>

                                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200">
                                    {book.description}
                                </p>

                            </div>
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="pt-4">
                        <DialogClose asChild>
                            <Button variant="outline" className="w-full sm:w-auto">
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>

            </form>
        </Dialog>
    )
}
