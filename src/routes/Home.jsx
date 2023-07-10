import { useEffect, useRef, useState } from 'react'
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import SKILLS from '../constants/Skills'
import Carousel from "../components/Carousel"

export default function Home() {
    const images = SKILLS.map(s => s.path)

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

            <Carousel images={images} className="icons" />

            </section>
        </main>
        </>
    )
}