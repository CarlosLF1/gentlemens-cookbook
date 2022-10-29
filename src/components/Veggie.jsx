import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom';
import { handleRecipe } from "./global";
import { Wrapper, Card, Gradient } from "./styles";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    
      console.log("recipe List for Vegi")
      const content ={
        type:'recipe',
        tags:'categoryVegan'
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
          {veggie?.map((recipe) => {
            return (
              <SplideSlide key={recipe.sys.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.sys.id}>
                  <p>{recipe.fields.title + '\n Created At:'+ recipe.sys.createdAt.substring(0,10)}</p>
                    <img src={recipe?.fields?.photos[0]?.fields.file.url} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

  export default Veggie