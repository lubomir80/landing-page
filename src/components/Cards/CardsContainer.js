import "./Cards.scss"


function CardsContainer({ children }) {
   return (
      <div className={`cards-container`}>
         {children}
      </div>
   )
}

export default CardsContainer