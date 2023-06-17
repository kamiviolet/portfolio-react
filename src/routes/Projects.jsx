import ProjectContainer from "../components/ProjectContainer"
import {v4} from 'uuid';
import "../css/projects.css"

export default function Projects() {
    const PROJECTS = [
        {
            name: "Ubiquitous Biscuit",
            description: `A mock forum inspired by Reddit, allowing users to join/delete/edit the membership and to contribute to the community by sharing articles and comments.`,
            tools: "JavaScript, NodeJS, Express, React, React router, Vite, jest, supertest, CSS",
            images: {
                web: '/ub_dark_web.png',
                mobile: '/ub_dark_responsive.png'
            },
        },
        {
            name: "Tribute page",
            description: `A simple tribute page dedicated to my sister, also to practise my CSS skills.`,
            tools: "HTML, CSS",
            images: {
                web: '/tributePage_web.png',
                mobile: '/tributePage_responsive.png'
            },
        },
        {
            name: "Recipe page",
            description: `A simple recipe page to experiment different CSS attributes.`,
            tools: "HTML, CSS",
            images: {
                web: '/odinRecipe_web.png',
                mobile: '/odinRecipe_responsive.png'
            },
        },
        {
            name: "Landing page",
            description: `A experimental landing page for a Bed & Breakfast service.`,
            tools: "HTML, CSS",
            images: {
                web: '/landingPage_web.png',
                mobile: '/landingPage_responsive.png'
            },
        },
        {
            name: "Documentation page",
            description: `A simple mock documentation page written to help myself pay more attention to the power of semantic HTML.`,
            tools: "HTML, CSS",
            images: {
                web: '/html_web.png',
                mobile: '/html_responsive.png'
            },
        },
    ]

    return (
        <main>
            <section className="section projects">
                <h2>Projects</h2>
                <div className="projects_wrapper">
                    {PROJECTS.map(project => {
                        return <ProjectContainer key={v4()} project={project}/>
                    })}
                </div>
            </section>
        </main>
    ) 
}