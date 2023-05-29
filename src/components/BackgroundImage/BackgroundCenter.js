import BackgroundContainer from './BackgroundContainer';
import "./BackgroundCenter.scss"

function BackgroundCenter({ image }) {

   return (
      <section className='background-center'>
         <BackgroundContainer image={image} />
      </section>
   )
}

export default BackgroundCenter