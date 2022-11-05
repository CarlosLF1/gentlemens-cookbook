import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Recipe(props) {
  
    const [recipe, setRecipe] = useState(props.recipe)

    function handleClick(e)
    {
        props.cb(recipe.sys.id)
    }
    return (
    <div>
        <Link to={`/search/${recipe.sys.id}`} className='text-black'>{recipe.fields.title}</Link>
    </div>

  )
}
