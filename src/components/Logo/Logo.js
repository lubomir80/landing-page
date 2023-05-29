import React from 'react'
import LogoImg from "../../img/Nav/Group.png"
import "./Logo.scss"

function Logo({ href, onClick, className }) {
   return (
      <a href={href} className={`logo ${className}`} onClick={onClick}>
         <img src={LogoImg} alt="Logo" />
         <span>desite</span>group
      </a>
   )
}

export default Logo