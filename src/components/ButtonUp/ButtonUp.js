import "./ButtonUp.scss"
import { FaArrowUp } from "react-icons/fa"
import { useGlobalContext } from "../../context"

function ButtonUp() {
   const { navbarSticky } = useGlobalContext()

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   }


   return (
      <div
         className={navbarSticky ? "container__button__up" : "container__button__up hiden"}>
         <button onClick={scrollToTop} className='button__up'>
            <FaArrowUp size={18} />
         </button>
      </div>
   )

}

export default ButtonUp