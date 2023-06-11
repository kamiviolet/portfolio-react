import { Link } from "react-router-dom";
import { BsFillHouseDoorFill, BsFillPersonBadgeFill, BsFillPaletteFill, BsJournalCode, BsFillRocketFill, BsChatLeftText } from "react-icons/bs";

export default function MenuWrapper() {
    const CATEGORIES = [
        {
          target: "home", 
          link: "",
          svg: <BsFillHouseDoorFill />
        },
        {
          target: "about", 
          link: "about",
          svg: <BsFillPersonBadgeFill />,
        },
        {
          target: "skills", 
          link: "skills",
          svg: <BsJournalCode />
        },
        {
          target: "projects", 
          link: "projects",
          svg: <BsFillRocketFill />,
        },
        {
          target: "contact", 
          link: "contact",
          svg: <BsChatLeftText />,
        },
      ];

      return (
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
        </ul>
      )
}