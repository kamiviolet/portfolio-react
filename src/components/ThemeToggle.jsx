import { BsMoonStarsFill, BsMoonStars } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from '../contexts/ThemeContext'

export default function ThemeToggle() {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = (theme) => {
        if (theme === 'dark') {
            setTheme('light')
            localStorage.setItem('theme', 'light')
        } else {
            setTheme('dark')
            localStorage.setItem('theme', 'dark')
        }  
    }

    return (
        <button className="theme_toggler" onClick={()=>toggleTheme(theme)}>
            {
                theme === 'dark'
                ? <BsMoonStarsFill />
                : <BsMoonStars />
            }
        </button>
    )
}