type ModalProps = {
    isOpen: boolean,
    onClose: () => void,
    children: React.ReactNode
}

export default function ModalRoot({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) return null;

    const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if ((e.target as Element).id=== 'modal-wrapper') onClose();
    }

    return (
        <div
            id="modal-wrapper"
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
            onClick={handleClose}
        >

            <div className="w-[600px] flex flex-col">
                <button className="text-white text-xl place-self-end" onClick={() => onClose()}>X</button>
                <div className="bg-white p2 rounded">
                    {children}
                </div>
            </div>
        </div>
    )
}