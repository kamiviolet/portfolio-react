import ProjectContainer from "../components/ProjectContainer"
import {v4} from 'uuid';
import "../css/projects.css"
import PROJECTS from '../constants/Projects.js'

export default function Projects() {

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