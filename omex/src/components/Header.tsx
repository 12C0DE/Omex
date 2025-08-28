import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
    return (
        <header className="flex justify-between p-2 sticky top-0 bg-white p-2 border-b border-gray-200">
            <h1 className="text-sm font-bold">OMEX</h1>
            <MenuIcon />
        </header>
    )
}