import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context';


function CardItem({ name, projectId, image }) {
   const { scrollToTop } = useGlobalContext()



   return (
      <div className='card__item'>
         <img src={image} alt={name} />
         {projectId &&
            <span>
               <Link
                  to={`project/${projectId}`}
                  onClick={scrollToTop}>
                  {name}
               </Link>
            </span>}
      </div>
   )
}

export default CardItem