import { useNavigate } from "react-router-dom"

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <div className="mb-4">
            <h1 className="text-2xl font-medium">404 - Page Not Found</h1>
        </div>
        <div>
            <input type="button" value="Go Back" onClick={() => navigate('/')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"/>
        </div>
        </div>
    )
}