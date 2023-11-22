export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: () => void;
    styles?: string;
}

export default function Button({ children, onClick, styles }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`${styles} bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded`}
        >
            {children}
        </button>
    )
}
