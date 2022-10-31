import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import { handleRecipe } from "./global";
import { Wrapper} from "./styles";

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
            perPage: 3,
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

  export default Veggie