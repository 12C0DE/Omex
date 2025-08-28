export const Title = ({ text }: { text: string }) => {
    return (
        <div className="w-full py-4 grid grid-cols-6 gap-0">
            <div className="col-span-1">1</div>
            <h1 className="text-2xl font-bold mb-4 col-span-4">{text}</h1>
            <div className="col-span-1">2</div>
        </div>
    )
}