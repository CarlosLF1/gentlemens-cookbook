import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import { handleRecipe } from "./global";
import { Wrapper} from "./styles";
import Cards from "./Cards";

const Popular = () => {
  const [popular, setPopular] = useState([]);


  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    
    const content ={
      type:'recipe',
      order:'-fields.avarageOfRatings',
      limit:10
     }
    const myrcp =  await handleRecipe(content,"list")
    
    setPopular(myrcp);
      // console.log(data.recipes);
    }
  

  return (
  <div>
        <Wrapper>
          <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}>
            {popular.map((recipe) => {
              const mystar = {size: 30, value: recipe.fields.avarageOfRatings, edit: false }
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

export default Popular;