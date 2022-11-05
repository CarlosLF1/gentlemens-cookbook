
import React from 'react'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { Card, Gradient } from "./styles";

export default function Cards({recipe}) {
  
  const mystar = {size: 30, value: recipe.fields.avarageOfRatings, edit: false }

  return (
      <Card>
        <Link to={"/recipe/" + recipe.sys.id}>
            <div>
            <p>{recipe.fields.title + '\n Created At:'+ recipe.sys.createdAt.substring(0,10)}</p>
            <ReactStars {...mystar}/>
            </div>
            {
              recipe?.fields?.photos[0]?.fields.file.url 
              ? (
                <img src={recipe?.fields?.photos[0]?.fields.file.url} alt={recipe.title} />
              ) : undefined
            }
            <Gradient />
        </Link>
      </Card>
  )
}





