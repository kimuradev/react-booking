import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { addDays } from "date-fns";
import DatePicker from "react-datepicker";

import { useBookingContext } from "../../context/booking/useBookingContext";
import Button from "../../components/Button";
import useExcludedDates from "./useExcludeDates";

import "react-datepicker/dist/react-datepicker.css";
import "./index.css";

export default function BookingReservation() {
    const { id } = useParams();
    const { bookingData, create } = useBookingContext();
    const navigate = useNavigate();

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(addDays(new Date(), 1));
    const [hasError, setHasError] = useState(false)
    
    const { excludedDates, handleValidDates } = useExcludedDates({
        id,
        bookingData,
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setHasError(false)
        try {
            handleValidDates(excludedDates, startDate, endDate);

            create({
                propertyId: id,
                startDate,
                endDate,
            })
    
            navigate('/booking')
        } catch (error) {
            setHasError(true)
        }
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-8">
                Request to book
            </h1>

            {hasError && (
                <div className="text-center m-4">
                    <span className="text-red-500">This date is not available anymore. Try to select another date.</span>
                </div>
            )}
            
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center gap-4">
                    <div className="gap-2">
                        <span>Check-in: </span>
                        <DatePicker
                            className="datePickerInput"
                            selected={startDate}
                            onChange={(date: Date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            excludeDateIntervals={excludedDates}
                        />
                    </div>

                    <div className="gap-2">
                        <span>Check-out: </span>
                        <DatePicker
                            className="datePickerInput"
                            selected={endDate}
                            onChange={(date: Date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            excludeDateIntervals={excludedDates}
                        />
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <Button>Confirm my reservation</Button>
                </div>
            </form>
        </>
    );
}