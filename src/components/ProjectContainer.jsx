import { useNavigate } from 'react-router-dom'
import SKILLS from '../constants/Skills'
import {v4} from 'uuid'

export default function ProjectContainer({project}) {
    const navigate = useNavigate();
    const tools = 
         project.tools.split(', ')
                .map(t => {
                    return SKILLS.find(s => s.name === t)
                })

    return (
        <div className="project_container">
            <div className="project details">
                <h3>{project.name}</h3>
                <span role="key">Description:</span><p role="value">{project.description}</p>
                <span role="key">Tools:</span>
                <div role="value">
                    {
                        tools.map(t => {
                            return t
                            ? <img src={t.path} className='icon' alt={t.name} key={v4()} />
                            : <></>
                        })
                    }
                </div>
                <div className="btn_wrapper">
                    <button onClick={()=>navigate(project.demo)}>Live demo</button>
                    <button onClick={()=>navigate(project.github)}>Code</button>
                </div>
            </div>
            <div className="project image">
                <img src={"projects" + project.images.web} className="thumbnail web_thumbnail"/>
                <img src={"projects" + project.images.mobile} className="thumbnail responsive_thumbnail"/>
            </div>
        </div>
    )
}