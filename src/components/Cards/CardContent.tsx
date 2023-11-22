type CardContentProps = {
    name: string,
    distance: string,
    price: string,
    period: string
}

export default function CardContent({ name, distance, price, period }: CardContentProps) {
    return (
        <div className="flex flex-col justify-around p-4 gap-2">
            <h3 className="font-semibold leading-none tracking-tight">{name}</h3>
            <p className="text-sm text-muted-foreground tracking-widest text-gray-400">{distance}</p>
            <p><strong>{price}</strong> {period}</p>
        </div>
    )
}