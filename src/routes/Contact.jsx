import '../css/contact.css'
import {v4} from 'uuid'
import SocialMediaCard from '../components/SocialMediaCard'
import SOCIAL_MEIDA from '../constants/SocialMedia'

export default function Contact() {

   return (
    <main> 
      <section className="contact">
         <h2>Find me in</h2>
         <p>I mainly use LinkedIn but you may also find me in Github.</p>
         <div className='card_wrapper'>
            {SOCIAL_MEIDA.map(ac => {
               return <SocialMediaCard key={v4()} ac={ac} />
            })}
         </div>
      </section>
    </main> 
   ) 
}