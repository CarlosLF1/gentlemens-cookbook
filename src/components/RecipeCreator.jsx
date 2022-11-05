import { useState } from 'react';
import { recipeFields } from '../constants/formFields';
import FormAction from './FormAction';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import { createRecipe } from '../utils/createRecipeFunc';

const fields = recipeFields;
const fieldsState = {};

fields.forEach((field) => {
  if(field.id !== "numberOfRatings" && field.id !== "averageOfRatings") {
    fieldsState[field.id] = '' 
  }
});

const RecipeCreator = () => {
  const [recipeState, setRecipeState] = useState({
    title: '',
    videoUrl: '',
    ingredients: '',
    recipeInstructions: '',
    userId: '',
  });
  const navigate = useNavigate();
  console.log('recipe State', recipeState);

  const handleChange = (e) => {
    setRecipeState({ ...recipeState, [e.target.id]: e.target.value })
  } ;
    
  // handle Signup API Integration here
  const createRecipeTotal = async () => {
    await createRecipe(recipeState.title, recipeState.ingredients, recipeState.recipeInstructions, recipeState.numberOfRatings, recipeState.averageOfRatings, recipeState.userId);
    navigate("/")
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recipeState);
    console.log("Type of Number", typeof recipeState.numberOfRatings)
    createRecipeTotal();
  };

  return (
    <form className="mt-8 space-y-6 max-w-md w-full" onSubmit={handleSubmit}>
      <div className="">
        {
          fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={recipeState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))
        }
        <FormAction handleSubmit={handleSubmit} text="Create" />
      </div>

    </form>
  );
};

export default RecipeCreator;
