import "./Footer.scss"
import FooterForm from '../Form/FooterForm';
import Contact from "./Contact/Contact";
import Copyright from "./Copyright/Copyright";



function Footer({ id }) {

   return (
      <footer className='footer' id={id}>
         <div className="footer__container">
            <Contact />
            <div className=" footer__form">
               <h5 className="contact__header">
                  Is the answer to your question missing?
                  Get in touch with us.
               </h5>
               <FooterForm />
            </div>
         </div>
         <Copyright />
      </footer>
   )
}

export default Footer