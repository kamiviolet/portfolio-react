import { useRef } from 'react'
import '../css/header.css'
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { v4 } from 'uuid'
import SKILLS from '../constants/Skills'

export default function Home() {
    const sliderRef = useRef(null);
    
    const slidingLeft = () => {
        if (sliderRef.current.scrollLeft > 0)
        sliderRef.current.scrollLeft -= 200
    }

    const slidingRight = () => {
        if (sliderRef.current.scrollLeft < sliderRef.current.scrollLeftMax)
        sliderRef.current.scrollLeft += 200
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
                <BsFillCaretLeftFill className='left' onClick={()=>{slidingLeft()}}/>
                <BsFillCaretRightFill className='right' onClick={()=>{slidingRight()}}/>
                <div ref={sliderRef} className="icons" >
                    {SKILLS.map(s => <img key={v4()} src={s.path} alt={s.name} />)}
                </div>
            </div>
            </section>
        </main>
        </>
    )
}