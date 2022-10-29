
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import Card from "./Recipe/Card"
import RecipeCard from "./Recipe/RecipeCard"
import RecipeImages from "./Recipe/RecipeImages"
import RecipeVideo from "./Recipe/RecipeVideo"
import Ingredients from './Recipe/Ingredients'
import UserComment from "./Recipe/UserComment"
import UserStar from "./Recipe/UserStar"
import RecipeList from "./Recipe/RecipeList"



import {contentful, client, handleRecipe} from "./global"



export  default function RecipeDetail() {

  const [content, setContent] = useState()
  
  let { recipeId } = useParams()

  useEffect(()=>{

    const fetchData = async () => {
      const myrcp =  await handleRecipe(recipeId,"get")
      console.log("recipe", content)
      setContent(myrcp)
    }
    fetchData();
  },[])

  console.log("recipe retrieved:", content)
  
  return (
    <div className="entry">
      
      <Card className='bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
        <RecipeImages recipeId={recipeId} />
      </Card>
        
      <Card className='bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
        <RecipeCard recipe={content} />
      </Card>
    
      <Card className='bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
        <RecipeVideo recipe={content} />
      </Card>

      <p>{content?.fields?.title}</p>
      
      <Card className='bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
        <Ingredients recipe={content} />
      </Card>

      <p>{content?.fields?.howToCook}</p>

      <Card className='bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
        <UserStar recipe={content} />
        <UserComment recipe={content} all={false}/>
      </Card>

      <Card className='bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
        <UserComment recipe={content} all={true}/>
      </Card>

      <Card className='bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
        <RecipeList category={content?.fields?.category}/>
      </Card>
   
    </div>
  )
}
