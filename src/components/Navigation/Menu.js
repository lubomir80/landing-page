import uniqid from 'uniqid';
import "./Menu.scss"
import { useGlobalContext } from '../../context';

function NavbarMenu({ links }) {
   const { closeMenu } = useGlobalContext()


   return (
      <ul className='menu__list'>
         {links.map(({ name, link }) =>
            <li key={uniqid()} className='menu__item' onClick={closeMenu}>
               <a href={link} className='menu__link'>{name}
               </a>
            </li>)}
      </ul>
   )
}

export default NavbarMenu