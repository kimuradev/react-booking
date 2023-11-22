type TableHeaderProps = {
    signed: boolean
    headerData: string[]
}

export default function TableHeader({ signed, headerData }: TableHeaderProps) {
    return (
        <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
                {headerData.map(item => (
                    <th key={item} className="bg-blue-100 px-6 py-4">{item}</th>
                ))}
                {signed && (
                    <th className="bg-blue-100 px-6 py-4 md:text-center">Actions</th>
                )}
            </tr>
        </thead>
    )
}