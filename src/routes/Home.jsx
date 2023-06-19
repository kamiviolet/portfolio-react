import { ThemeContext } from '../contexts/ThemeContext'
import { Component, useContext, useEffect, useState, useRef } from 'react'
import {v4} from 'uuid'
import SKILLS from '../constants/Skills'
import '../css/header.css'
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

export default function Home() {
    const {theme, setTheme} = useContext(ThemeContext)
    const sliderRef = useRef(null);
    const [offsetX, setOffsetX] = useState(0);
      
    const slidingLeft = ({current}) => {
        console.log(current.offsetWidth)
        console.log(current.scrollWidth)
    }
    const slidingRight = ({current}) => {
        
    }

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
        </header>

        <main>
            <section className="self-intro">
            <p>
                I build things on the web with JavaScript, and hopefully, not just things but things that can help people to connect with each other, to help them to have a more comfortable life.
            </p>
            <p>
                My current skill set includes:
            </p>
            <div className="icons_wrapper">
                <BsFillCaretLeftFill className='left' onMouseOver={()=>slidingLeft(sliderRef)}/>
                <BsFillCaretRightFill className='right' onMouseOver={()=>slidingRight(sliderRef)}/>
                <div
                    className="icons"
                    ref={sliderRef}
                >
                    {SKILLS.map(s => <img key={v4()} src={s.path} alt={s.name} />)}
                </div>
            </div>
            </section>
        </main>
        </>
    )
}