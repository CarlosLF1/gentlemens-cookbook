import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/Recipe';

const contentful = require('contentful');

const client = contentful.createClient({
  space: 'fx3pnargdzjr',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'XK9hAS_c-tQHK5UcRKKF-wUZhCUz8nE9ExQ5-9MD5qA',
});


const App = () => {
  
  const [recipes, setRecipes] = useState() 
  

  useEffect(() => {
    const fetchData = async () => {
      await client.getEntries({
        content_type: 'recipe',

      })
        .then((response) => {
          console.log(response.items)
          setRecipes(response?.items)
        })
        .catch(console.error);
    };

    fetchData();
  }, []);

  function handleClick(id){
    console.log(id)
  }

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello Gentlemen! Shall we cook?
      </h1>
      <ul>
        {recipes?.map((item, idx)=> <Recipe key={item.sys.id} cb={handleClick} recipe={item}/>)}
      </ul>
    </div>
  );
};

export default App;

