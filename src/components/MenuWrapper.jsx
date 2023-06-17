import { Link } from "react-router-dom";
import CATEGORIES from "../constants/Categories";
import ThemeToggle from './ThemeToggle'

export default function MenuWrapper() {
      return (
        <>
            <ul className="menu_wrapper hidden">
                {CATEGORIES.map(elem => {
                    return (
                        <li key={elem.link}>
                            <Link className="menu_link" to={elem.link}>
                                <div className="menu_icon">{elem.svg}</div>
                                <p className="menu_text">{elem.target.toUpperCase()}</p>
                            </Link>
                        </li>
                    )
                })}
                <li>
                <ThemeToggle />
                </li>
            </ul>
        </>
      )
}