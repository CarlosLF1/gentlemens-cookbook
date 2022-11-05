import React, { useEffect, useState } from 'react'
import {handleRecipe} from "../global"
import RecipeCard from './RecipeCard'

export default function RecipeList({category}) {
 
  const [recipeList, setRecipeList] = useState([])
  console.log ('category of opened recipe', category)
 
  useEffect(()=>{
    const fetchData = async () => {
      console.log("recipe List for category1")
      const content ={cat:category, limit:5, order:'AvarageOfRatings'}
      const myrcp =  await handleRecipe(content,"list")
      console.log("recipe List for category2", content)
      setRecipeList(myrcp)
    }
    fetchData(); 
  },[category])
  
  return (
    <ul>
      {recipeList?.map((item,idx)=><RecipeCard key= {idx} item={item}/>)}
    </ul>
  )
}
