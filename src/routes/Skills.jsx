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
            path: '/devicons/css3-original.svg'
        },
        {
            name: "SASS",
            path: '/devicons/sass-original.svg',
        },
        {
            name: "JavaScript",
            path: '/devicons/javascript-original.svg',
        },
        {
            name: "React",
            path: '/devicons/react-original.svg'
        },
        {
            name: "TypeScript",
            path: '/devicons/typescript-original.svg'
        },
        {
            name: "Nodejs",
            path: '/devicons/nodejs-original.svg'
        },
        {
            name: "Express",
            path: '/devicons/express-original.svg'
        },
        {
            name: "npm",
            path: '/devicons/npm-original-wordmark.svg'
        },
        {
            name: "jest",
            path: '/devicons/jest-plain.svg'
        },
        {
            name: "mocha",
            path: '/devicons/mocha-plain.svg'
        },
        {
            name: "PostgreSQL",
            path: '/devicons/postgresql-plain.svg'
        },
        {
            name: "Firebase",
            path: '/devicons/firebase-plain.svg'
        },
        {
            name: "Git",
            path: '/devicons/git-original.svg'
        },
        {
            name: "Trello",
            path: '/devicons/trello-plain.svg'
        },
    ];

    return (
        <main>
            <section className="skills">
                <h2>Skills</h2>
                <div className="description">
                    <p>
                    My core skill set includes HTML, CSS and JavaScript, with knowledge about several frameworks including Sass, Express, React, React Native and TypeScript. I am adapted to Agile methodologies, implementing Test-Driven-Development to conduct both unit & integration test with Jest/Mocha. For database, I prefer SQL language but as different project requires different approach, I am also equipped with some No-SQL experience, for example Firestore in Firebase.
                    </p>
                    <p>
                    I am planning to dig deeper the potentiality of the above-mentioned technologies but also interested in exploring new tools. Currently, I am also learning C (yeah, that "C") in my pastime and I really like it.
                    </p>
                </div>
                <div className="icons">
                    {SKILLS.map(s => <img key={v4()} src={s.path} alt={s.name} />)}
                </div>
            </section>
        </main>
    )
}