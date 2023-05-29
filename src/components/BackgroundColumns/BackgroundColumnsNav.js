import CardContainer from "../Cards/CardsContainer"
import CartItem from "../Cards/CardItem";
import CartNavigation from "../Cards/CardNavigation"
import "./BackgroundColumnsNav.scss"


function BackgroundColumnsNav({ navId, next }) {

   if (next) {
      return (
         <section className="columns-navigation" id={navId}>
            <CardContainer>
               <CartItem image={next.mobileImage1} />
               <CartNavigation id={next.projectId} />
            </CardContainer>
         </section>
      )
   }

}

export default BackgroundColumnsNav