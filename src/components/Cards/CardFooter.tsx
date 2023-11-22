import { Link } from "react-router-dom"

import Button from "../Button"

type CardFooterProps = {
    id: string,
    buttonLabel: string
}

export default function CardFooter({ id, buttonLabel }: CardFooterProps) {
    return (
        <div className="flex justify-end m-4">
        <Link to={`/booking/${id}`}>
            <Button>{buttonLabel}</Button>
        </Link>
    </div>
    )
}