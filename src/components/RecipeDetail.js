
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import RecipeCard from "./Recipe/RecipeCard"
import RecipeImages from "./Recipe/RecipeImages"
import RecipeVideo from "./Recipe/RecipeVideo"
import Ingredients from './Recipe/Ingredients'
import UserComment from "./Recipe/UserComment"
import UserStar from "./Recipe/UserStar"
import PopularSameCategory from "./PopularSameCategory"
import { Card, Gradient } from "./styles";



import {handleRecipe} from "./global"



export  default function RecipeDetail() {

  const [content, setContent] = useState()
  
  let { recipeId } = useParams()

  useEffect(()=>{

    const fetchData = async () => {
      const myrcp =  await handleRecipe(recipeId,"get")
      console.log("recipe", myrcp)
      setContent(myrcp)
    }
    fetchData();
  },[recipeId])

   
  return (
    <div>
      {content
      ?<div className="entry">
        <Card>
            <img src={content?.fields?.photos[0]?.fields.file.url} alt={content.title} />
            <Gradient />
        </Card>

        <div className='bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
          <p className='flex flex-col '>{content.fields.title}</p>
          <p className='flex flex-col'>{content.sys.createdAt.substring(0,10)}</p>
        </div>
      
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
          <PopularSameCategory category={content?.metadata?.tags}/>
        </Card>
    
      </div>
      :<h1>Loading</h1>
      }
    </div>
  )
}
