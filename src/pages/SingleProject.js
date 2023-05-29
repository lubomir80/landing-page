import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { navbarProject } from "../data"
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navigation/Navbar'
import BackgroundMain from '../components/BackgroundImage/BackgroundMain'
import Information from '../components/Information/Information'
import BackgroundColumns from '../components/BackgroundColumns/BackgroundColumns'
import InformationText from '../components/Information/InformationText'
import BackgroundCenter from '../components/BackgroundImage/BackgroundCenter'
import BackgroundColumnsNav from '../components/BackgroundColumns/BackgroundColumnsNav'
import ButtonUp from "../components/ButtonUp/ButtonUp"
import { motion } from 'framer-motion'
import { useGlobalContext } from '../context'
import { projects } from '../data';


function SingleProject() {
   const { currecntProject, nextProject, findProject, findNextProject } = useGlobalContext()
   const navigate = useNavigate();
   const { id } = useParams()


   useEffect(() => {
      if (isNaN(Number(id)) || projects.length < id) {
         navigate("/error")
      } else {
         findProject(id);
         findNextProject(id)
      }

   }, [id, findProject, findNextProject, navigate])


   if (currecntProject) {

      const { name, imageMain, title, text1, text2, text3, text4,
         text5, text6, mobileImage1, mobileImage2,
         footerImage, numbers } = currecntProject;

      return (
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>

            <Navbar links={navbarProject} white={true} />
            <BackgroundMain title={name} image={imageMain} />
            <Information title={title} text1={text1} text2={text2} numbers={numbers} navId="price" />
            <BackgroundColumns image1={mobileImage1} image2={mobileImage2} />
            <InformationText text1={text3} text2={text4} />
            <BackgroundCenter image={footerImage} />
            <InformationText text1={text5} text2={text6} />
            <BackgroundColumnsNav image1={mobileImage1} next={nextProject} navId="more" />
            <ButtonUp />
         </motion.div>

      )
   }


}

export default SingleProject