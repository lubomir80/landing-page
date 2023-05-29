import Hero from '../components/Hero/Hero';
import Preferences from "../components/Preferences/Preferences"
import Works from '../components/Works/Works';
import Partner from "../components/Partner/Partner"
import Map from '../components/Map/Map';
import Navbar from '../components/Navigation/Navbar';
import ButtonUp from '../components/ButtonUp/ButtonUp';
import { motion } from 'framer-motion';

import { navbarHome } from "../data"



function Home() {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}>
         <Navbar links={navbarHome} />
         <Hero />
         <Preferences id="preferences" />
         <Works id="works" />
         <Partner id="partner" />
         <Map />
         <ButtonUp />
      </motion.div>


   )
}

export default Home