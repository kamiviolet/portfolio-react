import { BsFillHouseDoorFill, BsFillPersonBadgeFill, BsFillPaletteFill, BsJournalCode, BsFillRocketFill, BsChatLeftText } from "react-icons/bs";

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

  export default CATEGORIES;