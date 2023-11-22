type CardHeaderProps = {
    image: {
        src: string,
        alt: string
    }
}

export default function CardHeader({ image }: CardHeaderProps) {
    return (
        <div className="flex justify-center items-center m-0 p-0" >
            <img src={image.src} alt={image.alt} className="rounded-t-lg" />
        </div>
    )
}