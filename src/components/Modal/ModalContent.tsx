type ModalContent = {
    hasError?: boolean,
    errorMessage?: string,
    children: React.ReactNode
}

export default function ModalContent({ hasError = false, errorMessage, children }: ModalContent) {
    return (
        <>
            {hasError && (
                <div className="text-center m-4">
                    <span className="text-red-500">{errorMessage}</span>
                </div>
            )}

            <div className="pl-8 pr-8">
                {children}
            </div>
        </>
    )
}