import ProjectContainer from "../components/ProjectContainer"
import "../css/projects.css"

export default function Projects() {
    const projects = [
        {
            name: "Documentation page",
            description: ``,
            tools: "HTML, CSS",
            images: {
                web: '/projects/html_web.png',
                mobile: '/projects/html_responsive.png'
            },
        },
        {
            name: "Landing page",
            description: ``,
            tools: "HTML, CSS",
            images: {
                web: '/projects/landingPage_web.png',
                mobile: '/projects/landingPage_responsive.png'
            },
        },
        {
            name: "Recipe page",
            description: ``,
            tools: "HTML, CSS",
            images: {
                web: '/projects/odinRecipe_web.png',
                mobile: '/projects/odinRecipe_responsive.png'
            },
        },
        {
            name: "Tribute page",
            description: ``,
            tools: "HTML, CSS",
            images: {
                web: '/projects/tributePage_web.png',
                mobile: '/projects/tributePage_responsive.png'
            },
        },
        {
            name: "Ubiquitous Biscuit",
            description: ``,
            tools: "HTML, CSS",
            images: {
                web: '/projects/ub_dark_web.png',
                mobile: '/projects/ub_dark_responsive.png'
            },
        }
    ]

    return (
        <main>
            <section className="section projects">
                <h2>Projects</h2>
                <ProjectContainer />
            </section>
        </main>
    ) 
}