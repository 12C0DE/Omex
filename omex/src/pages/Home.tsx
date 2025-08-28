import CircleIcon from '@mui/icons-material/Circle';
import { ScreenContainer } from '../components';
import { Services } from './index';

export const Home = () => {
    return (
        <div className="flex flex-col items-center mt-[48px] ">
        {/* <div className="flex flex-col items-center lg:w-lg md:w-md sm:w-screen h-screen"> */}
        <ScreenContainer>
            <CircleIcon style={{ fontSize: 200, color: 'lightgray' }} />
            <p>OMEX</p>
            <div className='mt-8'>
                <p className="text-center text-gray-500">Welcome to Omex.</p>
            </div>
        </ScreenContainer>
        <ScreenContainer>
            <Services />
        </ScreenContainer>
        </div>
    )
}