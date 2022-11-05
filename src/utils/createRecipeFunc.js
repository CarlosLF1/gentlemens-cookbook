import {expandN} from "regex-to-strings"

const contentful = require('contentful-management');

const client = contentful.createClient({
  accessToken: 'CFPAT-7W8wkezLVlNwPbzz2YTP4W5NFQYhFRl2ozo23yBUcTk',
});

// react-uuid package for ID
export const generateID = () => expandN(/^[a-zA-Z0-9-_.]{1,64}$/, 1)[0];

export const createRecipe = async (id, title, ingredients, recipeInstructions, userId) => {
  await client.getSpace(`${process.env.REACT_APP_SPACE_ID}`)
    .then((space) => space.getEnvironment(`${process.env.REACT_APP_ENVIRONMENT_ID}`))
    .then((environment) => environment.createEntryWithId(
      'recipe',
      `${id}`,
      {
        fields: {
          title: {
            'en-US': `${title}`,
          },
          ingredients: {
            'en-US': [ingredients],
          },
          recipeInstructions: {
            'en-US': `${recipeInstructions}`,
          },
          userId: {
            'en-US': `${userId}`,
          },
        },
      },
    ))
    // .then((entry) => entry.publish())
    .then((entry) => console.log(entry))
    .catch(console.error);
};
