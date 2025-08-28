import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
    return (
        <header className="flex justify-between m-2">
            <h1 className="text-sm font-bold">OMEX</h1>
            <MenuIcon />
        </header>
    )
}