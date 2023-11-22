import { useContext } from "react";

import { BookingContext } from "./booking";

export const useBookingContext = () => {
    const context = useContext(BookingContext);

    if (!context) {
        throw new Error('useBookingContext must be used with BookingContext')
    }

    return context;
};