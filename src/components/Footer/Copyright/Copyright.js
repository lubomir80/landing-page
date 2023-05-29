import "./Copyright.scss"

function Copyright() {
   const year = new Date().getFullYear();

   return (
      <div className='copyright'>
         <p>Copyright by <a href='#'> Lubomir Kutsii. </a>
            Designed by private company.
            Was made for my own portfolio not for sale.
            Don't claim as your own product.
         </p>
         <p >&copy; {year} desite.</p>
      </div>
   )
}

export default Copyright