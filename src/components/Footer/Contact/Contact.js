import "./Contact.scss"
import NavIcons from "../../Navigation/NavIcons"


function Contact() {
   return (
      <div className="contact">
         <h5 className="contact__header">Contact</h5>
         <div className='contact__container'>
            <div className='contact__item'>
               <h5 className="contact__header">Email</h5>
               <a href="mailto:hello@desitegroup.com">
                  hello@desitegroup.com</a>
            </div>
            <div className='contact__item'>
               <h5 className="contact__header">Office</h5>
               <address>Lviv 79054 <br /> 1 Oleksy Girnjaka Str<br />
                  <a href="tel:+38096-956-93-30"> +38 096 956 93 30</a>
               </address>
            </div>
            <div className='contact__item'>
               <h5 className="contact__header">We on social</h5>
               <NavIcons />
            </div>
         </div>
      </div>
   )
}

export default Contact