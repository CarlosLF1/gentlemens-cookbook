import React from 'react'

export default function Instructions({recipe}) {
  console.log("recipe values:", recipe?.fields?.recipeInstructions, recipe)
  return (
    <p className='text-black'>{recipe?.fields?.recipeInstructions}</p>
  )
}