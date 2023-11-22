import { useEffect, useState } from "react";
import { addDays, areIntervalsOverlapping, subDays } from "date-fns";

import { BookingListProps, DataProps } from "../../context/booking/booking";

type ExcludeDates = {
    start: Date,
    end: Date,
}

type ExcludedDatesProps = {
    id: string | undefined,
    bookingData: BookingListProps[],
}

export default function useExcludedDates({ id, bookingData = [] }: ExcludedDatesProps) {
    const [excludedDates, setExcludedDates] = useState<ExcludeDates[]>([]);

    const handleExcludedDate = (excludedList: DataProps[]) => {
        return excludedList.map(excluded => ({
            start: subDays(excluded.startDate, 1),
            end: excluded.endDate
        }))
    }

    useEffect(() => {
        const excluded = bookingData.filter(item => item.propertyId === id);
        setExcludedDates(handleExcludedDate(excluded))
    }, [id, bookingData])

    const handleValidDates = (excludedDates: ExcludeDates[], startDate: Date, endDate: Date) => {
        excludedDates.map((excluded: { start: Date, end: Date }) => {
            const isWithinInterval = areIntervalsOverlapping(
                { start: addDays(excluded.start, 1), end: excluded.end },
                { start: startDate, end: endDate }
            )
            if (isWithinInterval) {
                throw new Error('Dates cannot be at the same interval.');
            }
        })
    }

    return {
        excludedDates,
        handleValidDates,
    }
}