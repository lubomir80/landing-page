import "./Preferences.scss"
import Circless from "../../img/Preferances/Circless.png";
import Circle from "../../img/Preferances/circle.png";
import Title from '../Title/Title';
import Carousel from '../Carousel/Carousel';
import NumbersContainer from '../Numbers/NumbersContainer';
import NumberItem from '../Numbers/NumberItem';

const numbersData = [
   { header: "10 +", text: "years of expertise" },
   { header: "70 +", text: "happy partners" },
   { header: "42", text: "months as average duration of partnership with client" },
   { header: "51", text: "projects delivered for last two years" },
]

function Preferences({ id }) {
   return (
      <section className='performances' id={id}>
         <img className='performances__circle-img' src={Circle} alt="" />
         <img className='performances__circles-img' src={Circless} alt="" />

         <div className="performances__title">
            <Title black={"Our performances"} className={"title"} />
            <p>We use only modern technologies and solutions. Desite Group is the best partner for your digital journey with a huge team of experienced, talented, and workaholic techies. We build for your business new digital product, improve existing ones, and innovate within their business domain or help you in building your own dedicated team of experts.
            </p>
         </div>

         <div className="performances__carousel">
            <Carousel />
         </div>

         <div className="performances__numbers">
            <NumbersContainer className={"numbers"}>
               {numbersData.map(({ header, text }) =>
                  <NumberItem key={text} header={header} text={text} />)}
            </NumbersContainer>
         </div>

      </section>
   )
}

export default Preferences