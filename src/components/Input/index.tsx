
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

export default function Input({ ...rest }: InputProps) {
    return (
        <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            {...rest} />
    )
}