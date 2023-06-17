import { Link } from 'react-router-dom'
import SKILLS from '../constants/Skills'
import { v4 } from 'uuid'

export default function ProjectContainer({project}) {
    return (
        <div className="project_container">
            <div className="project details">
                <h3>{project.name}</h3>
                <span role="key">Description:</span><p role="value">{project.description}</p>
                <span role="key">Tools:</span>
                <div role="value">
                    {
                        project.tools.split(', ')
                        .map(t => {
                            return SKILLS.find(s => s.name === t)
                        })
                        .map(t => <img src={t.path} className='icon' alt={t.name} key={v4()} />)
                    }
                </div>
                <div className="btn_wrapper">
                    <Link to={project.url.demo} target='_blank'>Live demo</Link >
                    <Link to={project.url.github} target='_blank'>Code</Link>
                </div>
            </div>
            <div className="project image">
                <img src={"projects" + project.images.web} className="thumbnail web_thumbnail"/>
                <img src={"projects" + project.images.mobile} className="thumbnail responsive_thumbnail"/>
            </div>
        </div>
    )
}