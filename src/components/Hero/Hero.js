import Fire from "../../img/Fire_L.png";
import Hand from "../../img/Hand.png";
import "./Hero.scss"

const listData = [
   "UI/UX Design",
   "CMS",
   "CMS",
   "Ecommerce",
   "UI/UX Design",
   "Ecommerce",
]


function Hero() {
   return (
      <section className='hero' >
         <div className="hero__container">
            <div className="hero__title-container">
               <div className="hero__title-box ">
                  <h1 className="hero__title">We Create </h1>
               </div>
               <div className="hero__title-box ">
                  <div className="hero__image">
                     <img src={Fire} alt="fire" />
                  </div>
                  <h1 className="hero__title"> Projects</h1>
               </div>
            </div>

            <div className="hero__buttom-container">
               <div className='hero__desreption'>
                  <span><img src={Hand} alt="&rarr" /></span>
                  Your digital success is our main destination. For years, Desite Group helps companies across the globe build new digital products, improve existing, and innovate within their business domain.
               </div>
               <div className='hero__feature'>
                  <ul>
                     {listData.map((item, idx) => <li key={item + idx}>{item}</li>)}
                  </ul>
               </div>
            </div>

         </div>
      </section>
   )
}

export default Hero