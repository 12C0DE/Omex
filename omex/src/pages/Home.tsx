import CircleIcon from '@mui/icons-material/Circle';

export const Home = () => {
    return (
        <div className="flex flex-col items-center mt-[48px] ">
        <div className="flex flex-col items-center lg:w-lg md:w-md sm:w-screen">

            <CircleIcon style={{ fontSize: 200, color: 'lightgray' }} />
            <p>OMEX</p>
        </div>
        </div>
    )
}