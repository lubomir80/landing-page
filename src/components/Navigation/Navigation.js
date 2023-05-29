import "./Navigation.scss"
import Menu from "./Menu"
import Contacts from './Contacts'


function Navigation({ links, className }) {


   return (
      <nav className={`navigation ${className}`}>
         <Menu links={links} />
         <Contacts />
      </nav>
   )
}

export default Navigation