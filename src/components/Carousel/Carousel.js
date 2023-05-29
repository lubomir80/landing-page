import React, { useState, useRef, useEffect } from 'react'
import { motion } from "framer-motion";
import uniqid from 'uniqid';
import carouselData from "./CaruswlData"
import "./Carousel.scss"


function Carousel() {
   const [width, setWidth] = useState(0);
   const carousel = useRef();

   useEffect(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
   }, [])

   return (
      <motion.div ref={carousel} className='carousel'>
         <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: - width, }}
            whileTap={{ cursor: "grabbing" }}
            className="carousel__container">

            {carouselData.map(({ image, title, text }) =>
               <motion.div className='carousel__item' key={uniqid()}>
                  <img src={image} alt={title} />
                  <h4>{title}</h4>
                  <p>{text}</p>
               </motion.div>
            )}

         </motion.div>
      </motion.div>
   )
}

export default Carousel