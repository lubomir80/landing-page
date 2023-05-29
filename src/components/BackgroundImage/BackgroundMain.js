import BackgroundContainer from './BackgroundContainer'
import "./BackgroundMain.scss"


function BackgroundMain({ image, title }) {

   return (
      <section className='background-main' >
         <BackgroundContainer
            title={title} image={image} />
      </section>
   )
}

export default BackgroundMain