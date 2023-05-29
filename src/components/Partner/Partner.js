import uniqid from 'uniqid';
import "./Partner.scss"
import BackgroundImg from "../../img/Splines2.png"
import Title from "../Title/Title"
import PartnerForm from "../Form/PartnerForm"
import { logos } from "../../data"


function Partner({ id }) {
   const newLogos = [...logos, ...logos]

   return (
      <section className='partner' id={id}>
         <img className='partner__background-img' src={BackgroundImg} />
         <div className="partner__titel">
            <Title black={"Will be our"} orange={"partner"} />
         </div>
         <div className="partner__form">
            <PartnerForm />
         </div>
         <div className="partner__logos">
            {newLogos.map(({ logo }) => <img key={uniqid()} src={logo} alt="logo" />)}
         </div>
      </section>
   )
}

export default Partner