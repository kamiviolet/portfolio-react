import {v4} from 'uuid'
import "../css/skills.css"

export default function Skills() {
    const SKILLS = [
        {
            name: "HTML",
            path: '/devicons/html5-original.svg',
        },
        {
            name: "CSS",
            path: 'public/devicons/css3-original.svg'
        },
        {
            name: "SASS",
            path: 'public/devicons/sass-original.svg',
        },
        {
            name: "JavaScript",
            path: 'public/devicons/javascript-original.svg',
        },
        {
            name: "React",
            path: 'public/devicons/react-original.svg'
        },
        {
            name: "TypeScript",
            path: 'public/devicons/typescript-original.svg'
        },
        {
            name: "Nodejs",
            path: 'public/devicons/nodejs-original.svg'
        },
        {
            name: "Express",
            path: 'public/devicons/express-original.svg'
        },
        {
            name: "npm",
            path: 'public/devicons/npm-original-wordmark.svg'
        },
        {
            name: "jest",
            path: 'public/devicons/jest-plain.svg'
        },
        {
            name: "mocha",
            path: 'public/devicons/mocha-plain.svg'
        },
        {
            name: "PostgreSQL",
            path: 'public/devicons/postgresql-plain.svg'
        },
        {
            name: "Firebase",
            path: 'public/devicons/firebase-plain.svg'
        },
        {
            name: "Git",
            path: 'public/devicons/git-original.svg'
        },
    ];

    return (
        <main>
            <section className="skills">
                <h2>Skills</h2>
                <div className="description">
                    <p>
                    My core tech skill include HTML, CSS, JavaScript, with knowledge about several frameworks including Sass, Express, React, React Native and TypeScript. I am adapted to Agile methodologies, implementing Test-Driven-Development to conduct both unit & integration test with Jest/Mocha. I personally prefer SQL language but as different project may require different approach, I am also equipped with No-SQL experience, for example Firestore (Firebase).
                    </p>
                    <p>
                    I am also learning C (yeah, that "C") in my pastime and I really like it.
                    </p>
                </div>
                <div className="icons">
                    {SKILLS.map(s => <img key={v4()} src={s.path} alt={s.name} />)}
                </div>
            </section>
        </main>
    )
}