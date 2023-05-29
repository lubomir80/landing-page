import InformationContainer from './InformationContainer'
import NumberContainer from "../Numbers/NumbersContainer"
import NumberItem from "../Numbers/NumberItem"

function Information({ title, text1, text2, numbers, navId }) {

   return (
      <InformationContainer id={navId}>
         <h5 className='information__title'>{title}</h5>
         <div className='information__text-container'>
            <p className='information__text'>{text1}</p>
            <p className='information__text'>{text2}</p>
         </div>
         <NumberContainer className="numbers-small">
            {numbers.map(({ number, title }) =>
               <NumberItem key={title} header={number} text={title} />)}
         </NumberContainer>
      </InformationContainer>
   )
}

export default Information