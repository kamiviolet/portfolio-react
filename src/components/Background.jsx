import '../css/background.css'
import { useContext,useEffect } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Background() {
    const {theme, setTheme} = useContext(ThemeContext)

    useEffect(()=> {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme)
        }    
    }, [])

    return (
        <div className={"sky "+ theme}>
            {[...Array(150)].map((star, i) => {
                let style = {
                    left: Math.floor(Math.random() * 100) + '%', 
                    top: Math.floor(Math.random() * 100) + '%',
                    width: Math.floor(Math.random() * 3 + 0.25) + 'px',
                    height: Math.floor(Math.random() * 3 + 0.25) + 'px',
                    animationDuration: Math.floor(Math.random() * 7500 + 3000) + 'ms'
                }
                return <span key={"star_"+i} className='star' style={style}></span>
            })}
        </div>
    )
  } 