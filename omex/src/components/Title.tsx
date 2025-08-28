export const Title = ({ text }: { text: string }) => {
const style = {
    background: 'repeating-linear-gradient(45deg, #fafafaff 0px, #90bad3ff 1px, transparent 1px, transparent 6px)'
}
const style2 = {
    background: 'repeating-linear-gradient(45deg, #fafafaff 0px, #90bad3ff 1px, transparent 1px, transparent 3px)'
}
    return (
        <div className="w-full py-4 grid grid-cols-6 gap-0">
            <div className="col-span-1" style={style2}></div>
            <h1
                className="text-3xl text-center py-4 col-span-4 font-aleo font-bold tracking-wider"
                style={style}
            >
                {text}
            </h1>
            <div className="col-span-1" style={style2}></div>

        </div>
    )
}