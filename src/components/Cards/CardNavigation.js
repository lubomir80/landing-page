import { Link } from "react-router-dom"
import { useGlobalContext } from "../../context";

function CardNavigation({ id }) {
   const { scrollToTop } = useGlobalContext();

   if (id) {
      return (
         <div className="card__item-navigation">
            <Link to={`/project/${id}`}
               onClick={scrollToTop}
            >Next <br /> Project</Link>
         </div>
      )
   }
}

export default CardNavigation