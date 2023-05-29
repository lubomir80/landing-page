import NavIcons from "./NavIcons"
import "./Contacts.scss"
import { useGlobalContext } from '../../context';

function Contacts() {
   const { closeMenu } = useGlobalContext()


   return (
      <div className="nav-contacts">
         <a onClick={closeMenu} href="#contact" className="button" >Hire us</a>
         <NavIcons className={"orange"} />
      </div>
   )
}

export default Contacts