type CardProps = {
  children: React.ReactNode
}

export default function CardRoot({ children }: CardProps) {
    return (
        <div className="rounded-xl border text-card-foreground shadow w-[250px] transform transition duration-500 hover:scale-110">
            {children}
        </div>
    )
}