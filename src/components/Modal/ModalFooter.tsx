type ModalFooter = {
    children: React.ReactNode
}

export default function ModalFooter({ children }: ModalFooter) {
    return (
        <div className="pt-8 pb-8 flex justify-end">
            {children}
        </div>
    )
}