import React from 'react'

export default function UserComment({recipe}) {
  console.log("comments", recipe)
  return (
      <ol reversed> 
      {
        recipe?.fields?.comments?.map((item, idx)=><li key={idx}> {item?.date} - {item?.user} -{item?.comment}</li>)
      }
  </ol>
  )
}
