import '../css/header.css'

export default function Home() {
    return (
        <>
        <header className="header">  
           Welcome to my portfolio, I'm
            <h1>
                <span className="name">Kami Lam</span>
            </h1>
            <span className="title">JavaScript Developer</span>
            
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