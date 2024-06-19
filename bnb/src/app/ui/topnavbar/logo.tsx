import Image from 'next/image'
import logoW from '/public/logoW.png'
import logoB from '/public/logoB.png'
import { useTheme } from './ThemeProvider';
export default function Logo() {
    const theme = useTheme();
    return (
        <div>
            <Image
        className='inline-block p-1 ml-.35 z-20'
        src={theme.theme === "Dark"?logoW:logoB}
        alt="B&B Logo"
        width={60}
        height={60}
    /> 
    <span className="hidden md:inline-block py-5 px-2 text-white flex-1 font-bold" style={{
          color: theme.theme === "Dark" ? "white" : "black",
        }}>B&B. Soft. Solutions.</span>
        </div>
    
    
);
}