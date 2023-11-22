import { useEffect, useState } from "react";
import { addDays } from "date-fns";
import DatePicker from "react-datepicker";

import { useBookingContext } from "../../context/booking/useBookingContext";
import { type BookingListProps } from "../../context/booking/booking";
import { useAuthContext } from "../../context/auth/useAuthContext";

import Button from "../../components/Button";
import { Table } from "../../components/Table";
import { Modal } from "../../components/Modal";

import { availableRooms } from "../../utils/fakeData";
import useExcludedDates from "../BookingReservation/useExcludeDates";

import "react-datepicker/dist/react-datepicker.css";

const headerData = ['Name', 'Start Date', 'End Date']

export default function BookingList() {
    const { signed } = useAuthContext();
    const { bookingData, remove, update } = useBookingContext();

    const [modalStartDate, setModalStartDate] = useState(new Date());
    const [modalEndDate, setModalEndDate] = useState(addDays(new Date(), 1));
    const [hasError, setHasError] = useState(false)
    const [modalData, setModalData] = useState({
        isOpen: false,
        data: {
            id: '',
            propertyId: '',
            startDate: new Date(),
            endDate: addDays(new Date(), 1)
        }
    })

    const { excludedDates, handleValidDates } = useExcludedDates({
        id: modalData.data.propertyId,
        bookingData
    })

    useEffect(() => {
        setModalStartDate(modalData.data.startDate)
        setModalEndDate(modalData.data.endDate)
    }, [modalData])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setHasError(false)
        const { id, propertyId } = modalData.data;

        try {
            handleValidDates(excludedDates, modalStartDate, modalEndDate);

            update(
                id,
                {
                    propertyId,
                    startDate: modalStartDate,
                    endDate: modalEndDate
                }
            )

            handleCloseModal();
        } catch (error) {
            setHasError(true)
        }
    }

    const handleEdit = (data: BookingListProps) => {
        setModalData((state: any) => ({
            ...state,
            isOpen: true,
            data,
        }))
    }

    const handleDelete = (id: string) => {
        remove(id);
    }

    const handleCloseModal = () => {
        setModalData((state) => ({
            ...state,
            isOpen: false,
        }))
        setHasError(false)
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-8">
                Booking List
            </h1>

            <Table.Root>
                <Table.Header signed={signed} headerData={headerData} />
                <Table.Body signed={signed} data={bookingData} dictionary={availableRooms} onEdit={handleEdit} onDelete={handleDelete} />
            </Table.Root>

            <Modal.Root isOpen={modalData.isOpen} onClose={() => handleCloseModal()}>
                <Modal.Header title="Edit booking" />
                <Modal.Content hasError={hasError} errorMessage="This date is not available anymore. Try to select another date." >
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-between gap-4">
                            <div className="gap-2">
                                <span>Check-in: </span>
                                <DatePicker
                                    className="datePickerInput"
                                    selected={modalStartDate}
                                    onChange={(date: Date) => setModalStartDate(date)}
                                    selectsStart
                                    startDate={modalStartDate}
                                    endDate={modalEndDate}
                                    excludeDateIntervals={excludedDates}
                                />
                            </div>

                            <div className="gap-2">
                                <span>Check-out: </span>
                                <DatePicker
                                    className="datePickerInput"
                                    selected={modalEndDate}
                                    onChange={(date: Date) => setModalEndDate(date)}
                                    selectsEnd
                                    startDate={modalStartDate}
                                    endDate={modalEndDate}
                                    minDate={modalStartDate}
                                    excludeDateIntervals={excludedDates}
                                />
                            </div>
                        </div>
                        <Modal.Footer>
                            <Button>Update</Button>
                        </Modal.Footer>
                    </form>
                </Modal.Content>
            </Modal.Root>
        </>
    );
}