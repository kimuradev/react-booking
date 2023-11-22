import { createContext, useMemo, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

type BookingProviderProps = {
    children?: React.ReactNode;
}

export type BookingListProps = {
    id: string,
    endDate: Date,
    propertyId: string | undefined,
    startDate: Date
}

export type DataProps = Omit<BookingListProps, 'id'>

type BookingContext = {
    bookingData: any,
    create: (data: DataProps) => void,
    update: (id: string, data: DataProps) => void,
    remove: (id: string) => void,
}

export const BookingContext = createContext<BookingContext | null>(null);

export function BookingProvider({ children }: BookingProviderProps) {
    const [bookingData, setBookingData] = useState(new Map())

    const create = (data: DataProps) => {
        setBookingData(prev => new Map([...prev, [uuidv4(), data ]]))
    }

    const update = (id: string, data: DataProps) => {
        setBookingData(prev => new Map([...prev, [id, data ]]))
    }

    const remove = (id: string) => {
        setBookingData((prev) => {
            const newState = new Map(prev);
            newState.delete(id);
            return newState;
          });
    }

    const getFormattedValue = Array.from(bookingData.entries()).map(book => {
        const id = book[0];
        const data = book[1];

        return {
            id,
            ...data,
        }
    })

    const value = useMemo(
        () => ({
            bookingData: getFormattedValue,
            create,
            update,
            remove
        }),
        [bookingData]
    );
    return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

