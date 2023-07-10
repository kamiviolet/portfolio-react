import SKILLS from '../constants/Skills'
import Carousel from "../components/Carousel"
import Header from "../components/Header"

export default function Home() {
    return (
        <>
        <Header />
        <section className="self-intro">
            <p>I build things on the web with JavaScript, and hopefully, not just things but things that can help people to connect with each other, to help them to have a more comfortable life.</p>
            <p>My current skill set includes:</p>
            <Carousel options={{loop: true}} pluginOptions={{delay: 1000, stopOnMouseEnter: true}} images={SKILLS} className="icons" />
        </section>
        </>
    )
}