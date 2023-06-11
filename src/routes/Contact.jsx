import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaCodepen } from 'react-icons/fa'
import '../css/contact.css'
import {v4} from 'uuid'
import SocialMediaCard from '../components/SocialMediaCard'

export default function Contact() {
   const socialMedia = [
      {
         name: "@in/uranus-vibe",
         icon: <BsLinkedin />,
         path: "https://www.linkedin.com/in/uranus-vibe"
      },
      {
         name: "@kamiviolet",
         icon: <BsGithub />,
         path: "https://github.com/kamiviolet/"
      },
      {
         name: "@kami-lam",
         icon: <FaCodepen />,
         path: "https://codepen.io/kami-lam"
      }
   ]

   return (
    <main> 
      <section className="contact">
         <h2>Find me in</h2>
         <p>I mainly use LinkedIn but you may also find me in Github.</p>
         <div className='card_wrapper'>
            {socialMedia.map(ac => {
               return <SocialMediaCard key={v4()} ac={ac} />
            })}
         </div>
      </section>
    </main> 
   ) 
}