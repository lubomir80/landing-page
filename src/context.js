import React, { useContext, useState, useEffect } from "react";
import { projects } from "./data"

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
   const [projectColec, setProjectColec] = useState(null);
   const [active, setActive] = useState(false);
   const [currecntProject, setCurrentProjectj] = useState("");
   const [nextProject, setNextProject] = useState("");
   const [navbarSticky, setNavbarSticky] = useState(false);

   useEffect(() => {
      if (projects) setProjectColec(projects);
   }, [])

   // ..............NAVBAR............................
   const navbarColorChanging = () => {
      if (window.scrollY > 0) {
         setNavbarSticky(true);
      } else {
         setNavbarSticky(false);
      }
   }
   window.addEventListener("scroll", navbarColorChanging);


   useEffect(() => {
      if (active) {
         document.body.classList.add("lock");
      } else {
         document.body.classList.remove("lock");
      }
   }, [active])

   const closeMenu = () => {
      if (active) { setActive(false) }
   }

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "auto" });
   }




   // ..............Singal Page............................

   const findProject = (id) => {
      if (projectColec) {
         const currentObject = projectColec.find((item) => item.projectId === Number(id))
         const currentIndex = projectColec.indexOf(currentObject)
         const pj = projectColec[currentIndex];
         setCurrentProjectj(pj)
      }
   }

   const findNextProject = (id) => {
      if (projectColec) {
         const currentIndex = projectColec.length === Number(id) ? 0 : Number(id);
         const pj = projectColec[currentIndex];
         setNextProject(pj);
      }
   }



   return (
      <AppContext.Provider value={{
         scrollToTop,
         navbarSticky,
         active,
         setActive,
         closeMenu,
         currecntProject,
         nextProject,
         findProject,
         findNextProject
      }}>
         {children}
      </AppContext.Provider>
   )
}

export const useGlobalContext = () => {
   return useContext(AppContext);
}

export { AppProvider, AppContext }