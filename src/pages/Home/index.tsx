import { Card } from "../../components/Cards";
import { availableRooms } from "../../utils/fakeData";

export default function Home() {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4 md:flex-row md:flex-wrap">
                {availableRooms.map(room => (
                    <Card.Root key={room.id}>
                        <Card.Header image={room.image}/>
                        <Card.Content {...room} />
                        <Card.Footer id={room.id} buttonLabel="Reserve" />
                    </Card.Root>
                ))}
            </div>
        </>
    );
}