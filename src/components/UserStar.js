import {handleRecipe} from "./global"

export default function UserStar({recipe, cb}) {
  async function addComment(){
    const content = {}
    content.id=recipe.sys.id;
    content.comments={date:(new Date()).toISOString(), user:"carlos", comment:"test3"}
    console.log("comment update value:",content.comments)
    await handleRecipe(content, "update")
    cb(content.comments)
    
    //window.location.reload()
    
  }
  return (
    <button onClick={addComment}>comment ekle</button>
  )
}
