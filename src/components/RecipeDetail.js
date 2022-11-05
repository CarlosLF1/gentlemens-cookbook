
import React, { useEffect, useState, useRef } from 'react'

import { useParams } from 'react-router-dom'

import RecipeVideo from "./Recipe/RecipeVideo"
import Ingredients from './Recipe/Ingredients'
import UserComment from "./Recipe/UserComment"
import StarComment from "./StarComment"
import PopularSameCategory from "./PopularSameCategory"
import { Card, Gradient } from "./styles";
import {handleRecipe} from "./global"
import Instructions from './Recipe/Instructions'




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
    <div className='flex flex-col justify-center items-center mx-20'>
      {content
        ? <div className="entry">
         <div className=' bg-[#c1121F] text-[#FDF0D5] backdrop-blur-lg rounded drop-shadow-lg'>
            <h2 className='flex flex-col items-center font-bold rounded '>{content.fields.title}</h2>
            <h5 className='flex flex-col items-center'> {content.sys.createdAt.substring(0, 10)} by {content.fields.userId}</h5>
          </div>
          <div className='grid'>
             <Card ref={inputElement}>
               <img src={content?.fields?.photos[0]?.fields.file.url} alt={content.title} />
               <Gradient />
             </Card>
             
          </div>
         
        {/* <p>{content?.fields?.title}</p> */}
        <div className='grid grid-cols-2'> 
          <Card className='bg-black text-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
              <Instructions recipe={content} />
          </Card>
        
        <Card className='bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
          <Ingredients recipe={content} />
        </Card>

        {/* <p className='text-black'>{content?.fields?.howToCook}</p> */}
        </div>
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
