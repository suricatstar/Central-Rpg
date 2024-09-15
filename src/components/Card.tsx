type CardProps = {
    titulo: string,
    description: string,
}

export default function Card(props: CardProps) {
    return (
        <>
            <div className=" min-w-32 flex flex-col justify-center items-center min-h-20 bg-blue-700 p-4 rounded-md">
                <span className="text-2xl font-bold">{props.titulo}</span>
                <span className="font-light">{props.description}</span>
            </div>
        </>
    );
}
