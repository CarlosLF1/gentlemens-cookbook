
import React, { useEffect, useState, useRef } from 'react'

import { useParams } from 'react-router-dom'

import RecipeVideo from "./Recipe/RecipeVideo"
import Ingredients from './Recipe/Ingredients'
import UserComment from "./Recipe/UserComment"
import StarComment from "./StarComment"
import PopularSameCategory from "./PopularSameCategory"
import { Card, Gradient } from "./styles";
import {handleRecipe} from "./global"




export  default function RecipeDetail() {

  const [content, setContent] = useState()
  const inputElement = useRef();
  
  let { recipeId } = useParams()

  useEffect(()=>{
    inputElement?.current?.focus();
    console.log(inputElement)
    const fetchData = async () => {
      const myrcp =  await handleRecipe(recipeId,"get")
      console.log("recipe", myrcp)
      setContent(myrcp)
    }
    fetchData();
  },[recipeId])

  function updateComments(recipe){
    const myrcp={...content}
    myrcp.fields.comments.push(recipe)
    setContent(myrcp)
  }

  return (
    <div className='flex justify-center'>
      {content
      ?<div className="entry">
        <Card ref={inputElement}>
            <img src={content?.fields?.photos[0]?.fields.file.url} alt={content.title} />
            <Gradient />
        </Card>

        <div className='bg-[#c1121F] text-[#FDF0D5] backdrop-blur-lg rounded drop-shadow-lg'>
          <p className='flex flex-col items-center font-bold '>{content.fields.title}</p>
          <p className='flex flex-col items-center'> date added - {content.sys.createdAt.substring(0,10)}</p>
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
            <StarComment recipe={content} all={true} cb={updateComments} />
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
