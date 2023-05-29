import "./Numbers.scss"

function NumberItem({ header, text }) {
   return (
      <div className="numbers__item">
         <p className='numbers__header'>{header}</p>
         <p className='numbers__text'>{text}</p>
      </div>
   )
}

export default NumberItem