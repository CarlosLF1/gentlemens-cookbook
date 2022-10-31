import React from 'react'

export default function UserComment({recipe}) {
  console.log("commets", recipe)
  return (
      <ul> 
      {
        recipe?.fields?.comments.map((item, idx)=><li key={idx}>{item?.comment} - {item?.user} - {item?.date.substring(0,10)}</li>)
      }
  </ul>
  )
}
