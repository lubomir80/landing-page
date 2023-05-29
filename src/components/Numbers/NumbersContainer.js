import "./Numbers.scss"

function NumbersContainer({ children, className }) {
   return (
      <div className={className}>
         {children}
      </div>
   )
}

export default NumbersContainer