import CardContainer from "../Cards/CardsContainer"
import CartItem from "../Cards/CardItem";

function BackgroundColumns({ image1, image2 }) {
   return (
      <CardContainer>
         <CartItem image={image1} />
         <CartItem image={image2} />
      </CardContainer>
   )
}

export default BackgroundColumns