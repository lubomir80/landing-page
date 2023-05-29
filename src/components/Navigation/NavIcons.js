import uniqid from 'uniqid';
import { icons } from "../../data"
import "./NavIcons.scss"


function NavIcons({ className }) {


   return (
      <div className='navicons'>
         <ul className='navicons__list'>
            {icons.map(({ icon, link }) =>
               <li className={`navicons__item ${className}`}
                  key={uniqid()}>
                  <a href={link}>{icon}</a>
               </li>)}
         </ul>
      </div>
   )
}

export default NavIcons