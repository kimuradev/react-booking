type ModalHeader = {
    title: string
}

export default function ModalHeader({ title }: ModalHeader) {

    return (
        <div className="p-8 mb-4">
            <h1 className="text-2xl font-bold">{title}</h1>
        </div>
    )
}