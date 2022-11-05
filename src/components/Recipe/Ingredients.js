import React from "react";


export default function Ingredients ({recipe}){
console.log("recipe ingredient:", recipe)

return (

  <ul> 
      {
        recipe?.fields?.ingredients?.map((item, idx)=><li key={idx}>{item?.Name} - {item?.MeasurementAmount} - {item?.MeasurementType}</li>)
      }
  </ul>

  )
}


