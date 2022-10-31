import React from 'react'

import {handleRecipe} from "../global"

export default function UserStar({recipe}) {
  function addComment(){
    const content = {}
    content.id=recipe.sys.id;
    content.comments={date:"2022-04-22", user:"carlos", comment:"test3"}
    console.log("comment update value:",content.comments)
    handleRecipe(content, "update")
  }
  return (
    <button onClick={addComment}>comment ekle</button>
  )
}
