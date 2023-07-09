import { BsFillHouseDoorFill, BsFillPersonBadgeFill, BsFillPaletteFill, BsJournalCode, BsFillRocketFill, BsChatLeftText } from "react-icons/bs";
import { BiPhotoAlbum } from "react-icons/bi";
import { FaPhotoVideo } from "react-icons/fa";

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
      target: "SVGs", 
      link: "svg_collections",
      svg: <BiPhotoAlbum />,
    },
    {
      target: "albums", 
      link: "albums",
      svg: <FaPhotoVideo />,
    },
    {
      target: "contact", 
      link: "contact",
      svg: <BsChatLeftText />,
    },
  ];

  export default CATEGORIES;