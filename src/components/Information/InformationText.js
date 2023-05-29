import InformationContainer from './InformationContainer'

function InformationText({ text1, text2 }) {

   return (
      <InformationContainer>
         <div className='information__text-container'>
            <p className='information__text'>{text1}</p>
            <p className='information__text'>{text2}</p>
         </div>
      </InformationContainer>
   )
}

export default InformationText