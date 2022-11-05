import React, { useState } from "react";
import { Formik, Field, Form as BaseForm } from "formik";

import StarsInput from "./Comment/StarsInput";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {handleRecipe} from "./global"
import { useEffect } from "react";



const showToastMessage = () => {
  toast.success('New Comment Added !', {
      position: toast.POSITION.BOTTOM_RIGHT
      
  });
};

export default function StarComment ({recipe, cb}) {
  
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState("")
  const [commented, setCommented] = useState(false)
  
  const [isSubmitted, setSubmit] = useState(false);
  console.log ("hello from star comment")


  const user = 'JOC2'
  useEffect(()=>{
   
  recipe.fields.comments.forEach(element => {
    if (element.user===user) 
    {
      setComment (element.comment)
      setStars (element.star)

    //  setCommented(true)
    }
  });
 },[recipe])
  
  async function handleComment(str, cmnt){
    const content = {}
    content.id=recipe.sys.id;
    if (cmnt) content.comments={date:(new Date()).toISOString(), user:user, comment:cmnt}
    if (str>0) content.star=str

    console.log("comment update value:",content.comments)
    
    await handleRecipe(content, "update")
    showToastMessage()
    setSubmit(true);
    setStars(0);
    setComment("")
    cb(content.comments)
  }
  
  // console.log("comented:", commented)

  return (
    commented?<h5>You have allready added a comment</h5>
    :
    <section >
    <Formik
        onSubmit={values => handleComment (values.stars, values.comment)}
        initialValues={{ stars, comment }}
      >
        {() => (
          <BaseForm>
            
            <StarsInput />
            <Field id="comment" name="comment" placeholder="Write a comment about" type="" />
            
            <button type="submit">
              Submit
            </button>
            <ToastContainer />
            </BaseForm>
        )}
        
      </Formik>
      

       {isSubmitted && <div> Form submitted with {stars} stars</div>}
    </section>
  

  );
};


