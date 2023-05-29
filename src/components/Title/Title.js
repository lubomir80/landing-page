import "./Title.scss"

function Title({ black, orange, className }) {
   return (
      <h2 className={`${className} title__component`}>
         {black} <span>{orange}</span>
      </h2>
   )
}

export default Title