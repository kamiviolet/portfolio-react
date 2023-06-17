import {ThemeContext} from '../contexts/ThemeContext'
import { useContext } from 'react'
import '../css/header.css'

export default function Home() {
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <>
        <header className="header">
            <div role="description">
                <p>Welcome to my portfolio, I'm</p>
                <h1>
                    <span className="name">Kami Lam</span>
                </h1>
                <span className="title">JavaScript Developer</span>
            </div>
            <img src="/undraw_programmer_re_owql.svg"/> 
        </header>

        <main>
            <section className="self-intro">
            <p>
                I build things on the web with JavaScript and also make SVGs for fun. 
            </p>
            </section>
        </main>
        </>
    )
}