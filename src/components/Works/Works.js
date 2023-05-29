import { useState, useEffect } from 'react'
import "./Works.scss"
import { projects } from "../../data";
import Title from '../Title/Title'
import CardsContainer from '../Cards/CardsContainer'
import CardItem from '../Cards/CardItem'

function Works({ id }) {
   const [hide, setHide] = useState(false);
   const [allProjects, setAllProjects] = useState("");

   useEffect(() => {
      if (projects) { setAllProjects(projects) }
   }, [])



   let newProjects;
   if (allProjects) {
      newProjects = hide ? allProjects : allProjects.slice(0, 2);
   }

   return (
      <section className='works' id={id}>
         <div className="works__title">
            <Title black={"Some of our best"} orange={"projects"} />
         </div>
         <div className="works__projects">
            <CardsContainer>
               {newProjects && newProjects.map(({ name, projectId, image }) =>
                  <CardItem
                     key={name}
                     name={name}
                     projectId={projectId}
                     image={image}
                  />)}
            </CardsContainer>
         </div>
         <div className='works__projects__btn'>
            <button className='button'
               onClick={() => { setHide(!hide) }}>
               {hide ? "Hide" : "All Projects"}
            </button>
         </div>

      </section >
   )
}

export default Works