import React from 'react';
import {handleRecipe} from "./global"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Field, Form } from 'formik';
import ReactStars from "react-rating-stars-component";


  const showToastMessage = () => {
      toast.success('New Comment Added !', {
          position: toast.POSITION.BOTTOM_RIGHT
          
      });
  };

const mystar = {size: 30, value: 0, edit: true }

export default function UserStar({recipe, cb}) {
  async function addComment(){
    const content = {}
    content.id=recipe.sys.id;
    content.comments={date:(new Date()).toISOString(), user:"carlos", comment:"test3"}
    console.log("comment update value:",content.comments)
    await handleRecipe(content, "update")
    showToastMessage()
    cb(content.comments)
  }
  return (
  <div>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 10000));
        addComment(values);
      }}
    >
      <Form>
        <ReactStars {...mystar} />
        <Field id="star" name="userStar" placeholder="Jane" />

      </Form>
    </Formik>
      
    <button onClick={addComment}>comment ekle
      <ToastContainer />
    </button>
    
  </div>
    
  )
}
