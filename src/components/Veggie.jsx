import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import { handleRecipe } from "./global";
//import { Wrapper} from "./styles";
import styled from "styled-components";
import Cards from "./Cards"


const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  

  useEffect(() => {
    getVeggie();
  }, []);



  const getVeggie = async () => {
      console.log("recipe List for Vegi")
      const content ={
        type:'recipe',
        tags:'categoryVegan',
        order:'-sys.createdAt'
       }
      const myrcp =  await handleRecipe(content,"list")
      console.log("recipe List for category2", myrcp)
      setVeggie(myrcp)
    }
    
 return (
    <div>
      <Wrapper>
        <h3>Our Vegetarian Picks</h3>
        <Splide
          options={{
            perPage: 2,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}>
            {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.sys.id}>
                <Cards recipe={recipe} />
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}


const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.2rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

  export default Veggie