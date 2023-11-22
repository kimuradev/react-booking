type TableProps = {
    children: React.ReactNode
}

export default function TableRoot({ children }: TableProps) {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden"></div>
                    <table className="min-w-full text-left text-sm font-light shadow-lg bg-white border-collapse table-auto">
                        {children}
                    </table>
                </div>
            </div>
        </div>
    )
}