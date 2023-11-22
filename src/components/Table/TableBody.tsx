import { format } from "date-fns";
import { Pencil, Trash2 } from "lucide-react";

import { DATE_FORMAT } from "../../utils/constants";
import { getRoomName } from "../../utils/helper";
import { BookingListProps } from "../../context/booking/booking";

type TableBodyProps = {
    signed: boolean, 
    data: any[], 
    dictionary: any[],
    onEdit: (data: BookingListProps) => void, 
    onDelete: (id: string) => void
}

export default function TableBody({ signed, data, onEdit, onDelete, dictionary }: TableBodyProps) {
    return (
        <tbody>
            {!data.length && (
                <tr className="border-b dark:border-neutral-500 hover:bg-gray-50">
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-center" colSpan={4}>No reservation</td>
                </tr>
            )}
            {data.map((book: any) => (
                <tr className="border-b dark:border-neutral-500 hover:bg-gray-50" key={book.id}>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{getRoomName(book.propertyId, dictionary)}</td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{format(book.startDate, DATE_FORMAT)}</td>
                
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{format(book.endDate, DATE_FORMAT)}</td>
                    {signed && (
                        <td className="whitespace-nowrap px-6 py-4 font-medium ">
                            <div className="flex justify-evenly">
                                <button onClick={() => onEdit(book)}>
                                    <Pencil className='w-4 h-4 mr-2 hover:text-pink-400' />
                                </button>
                                <button onClick={() => onDelete(book.id)}>
                                    <Trash2 className='w-4 h-4 mr-2 text-red-500 hover:text-pink-400' />
                                </button>
                            </div>
                        </td>
                    )}
                </tr>
            ))}
        </tbody>
    )
}