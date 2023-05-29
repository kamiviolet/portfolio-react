import '../css/header.css'

export default function Home() {
    return (
        <>
        <header className="header">  
            <h1>Welcome to my Portfolio. I'm
                <span className="name">Kami Lam</span>
                <span className="title">Junior JavaScript Developer</span>
            </h1>
        </header>

        <main>
            <section className="self-intro">
            <p>Hi there, I am Kami, a UK-based Junior devloper from Hong Kong. Still in the middle of Coding bootcamp, I started my journey 20 years ago, hosting my very first homepage in Geocities JP. After long pause in search for various life experiences, I resumed my adventure in Technology last year through many amazing free materials available online, including freeCodeCamp and Odin Project.</p>
            <p>Despite a big gap in my journey to this field, I am understanding, creative, very passionate about problem-solving and like to see the inter-relatedness of everything thanks to my background and past experiences. Those eqipped me to be able to comprehend people's need and come up with ideas to apply in my projects.</p>
            </section>
        </main>
        </>
    )
}