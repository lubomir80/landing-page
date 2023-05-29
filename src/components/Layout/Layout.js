import { Outlet } from 'react-router-dom'
import "./Layout.scss"
import Footer from "../Footer/Footer.js";



function Layout() {
   return (
      <div className="layout">
         <Outlet />
         <Footer id="contact" />
      </div>
   )
}

export default Layout