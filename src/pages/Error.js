import "./Error.scss"
import Logo from "../components/Logo/Logo"
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


function Error() {
   return (
      <motion.section
         className='error-page'>
         <Logo />
         <div className='error-page__container'>
            <p className='error-page__title'>Sorry, this page doesn't exist</p>
            <p className='error-page__text'>Please check the URL or go back a homepage.</p>
            <Link to="/" className='error-page__button button'>Homepage</Link>
         </div>
      </motion.section>
   )
}

export default Error