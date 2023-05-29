import { useRef } from 'react'
import "./Navbar.scss"
import Logo from '../Logo/Logo'
import Navigation from './Navigation'
import { useGlobalContext } from '../../context'


function Navbar({ links, white }) {
   const { active, setActive, closeMenu, navbarSticky } = useGlobalContext();
   const navbarRef = useRef();

   const menuHandel = () => {
      setActive(!active);
   }

   const whiteColor = !active && white && !navbarSticky;
   const whiteColorText = whiteColor ? "white" : "";
   const headerSticky = navbarSticky ? "navbar sticky" : "navbar"
   const activeMenu = active ? "navbar__container active" : "navbar__container"
   const burgerToggle = active ? "active" : ""



   return (
      <header ref={navbarRef} className={`${headerSticky} ${whiteColorText}`}>
         <div className={activeMenu}>
            <Logo href="/" onClick={closeMenu} />
            <div className="navbar__burger">
               <span className="navbar__burger__text">Menu</span>
               <button
                  onClick={menuHandel}
                  className="navbar__burger__btn">
                  <span />
               </button>
            </div>
            <Navigation links={links} className={burgerToggle} />
         </div>
      </header>
   )
}

export default Navbar