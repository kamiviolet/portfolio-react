import {v4} from 'uuid'
import "../css/skills.css"
import SKILLS from '../constants/Skills'

export default function Skills() {
    return (
        <main>
            <section className="skills">
                <h2>Skills</h2>
                <div className="description">
                    <p>
                    My core skill set includes <strong>HTML, CSS and JavaScript</strong>, with knowledge about several frameworks including <strong>Sass, Express, React, React Native, Vite and Expo</strong>. I am adapted to <strong>Agile methodologies</strong>, implementing Test-Driven-Development to conduct both unit & integration test with <strong>Jest/Mocha</strong>. For database, I use <strong>PostgreSQL</strong> but as different project requires different approach, I am also equipped with some No-SQL experience, for example Firestore in <strong>Firebase</strong>.
                    </p>
                    <p>Aside from that, I also have experience with <strong>Inkscape</strong> and creating SVGs.</p>
                    <p>
                    I am planning to dig deeper the potentiality of the above-mentioned technologies but also interested in exploring new tools. Currently, I am also learning <strong>C</strong> (yeah, that "C") and <strong>Bash</strong> in my pastime as my interest. Although I am not good in them yet, I really enjoy learning them.
                    </p>
                </div>
                <div className="icons">
                    {SKILLS.map(s => <img key={v4()} src={s.path} alt={s.name} />)}
                </div>
            </section>
        </main>
    )
}