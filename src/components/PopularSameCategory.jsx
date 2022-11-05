import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { handleRecipe } from "./global";
import { Wrapper} from "./styles";
import Cards from "./Cards"

const PopularSameCategory = ({category}) => {
  const [popular, setPopular] = useState([]);

  console.log('Recipe related tags', category)

  useEffect(() => {
    getPopular();
  },[category]);

  async function getPopular() {

    const content = {
      type: 'recipe',
      order: '-fields.numberofratings',
      limit: 10,
    };

    let taglist = '';
    if (category?.length > 0) {
      category.forEach(element => {
        if (taglist) { taglist = taglist + ', ' + element.sys.id; }
        else
          taglist = element.sys.id;
      });
      content.tags = taglist;
    }

    const myrcp = await handleRecipe(content, "list");
    console.log("recipe related popular list", myrcp);
    
    setPopular(myrcp);
    

  }

  console.log('popular list', popular)
  return (
  <div>
    {
    popular
    ?<div>
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
                  return (
                  <SplideSlide key={recipe.sys.id}>
                     <Cards recipe={recipe} />
                  </SplideSlide>
                );
              })}
            </Splide>
          </Wrapper>
      </div>
      :<h1>Loading</h1>
      }
    </div>
    );
}

export default PopularSameCategory;