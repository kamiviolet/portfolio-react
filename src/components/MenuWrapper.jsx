import { Link } from "react-router-dom";


export default function MenuWrapper() {
    const CATEGORIES = [
        {
          target: "home", 
          link: "",
          svg: <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>Home</title><path d='M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z'/></svg>
        },
        {
          target: "about", 
          link: "about",
          svg: <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>About</title><path d='M1.5,4V5.5C1.5,9.65 3.71,13.28 7,15.3V20H22V18C22,15.34 16.67,14 14,14C14,14 13.83,14 13.75,14C9,14 5,10 5,5.5V4M14,4A4,4 0 0,0 10,8A4,4 0 0,0 14,12A4,4 0 0,0 18,8A4,4 0 0,0 14,4Z'/></svg>,
        },
        {
          target: "skills", 
          link: "skills",
          svg: <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>Skills</title><path d='M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z'/></svg>,
        },
        {
          target: "projects", 
          link: "projects",
          svg: <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>Projects</title><path d='M19,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H19A2,2 0 0,1 21,8H21L4,8V18L6.14,10H23.21L20.93,18.5C20.7,19.37 19.92,20 19,20Z'/></svg>,
        },
        {
          target: "contact", 
          link: "contact",
          svg: <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>Contact</title><path d='M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z'/></svg>,
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