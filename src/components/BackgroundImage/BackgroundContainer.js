import "./BackgroundContainer.scss"
import { motion } from 'framer-motion'

function BackgroundContainer({ title, image }) {
   return (
      <div className="background">
         <motion.div className="background__image" initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <img src={image} alt={title} />
         </motion.div>
         {title && <h1 className="background__title">{title}</h1>}
      </div>
   )
}

export default BackgroundContainer