import { useEffect, useState } from 'react';
import './App.css';

const contentful = require('contentful');

const client = contentful.createClient({
  space: 'fx3pnargdzjr',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'XK9hAS_c-tQHK5UcRKKF-wUZhCUz8nE9ExQ5-9MD5qA',
});

const App = () => {
  const [testEntries, setTestEntries] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      // await client.getEntries({
      //   content_type: 'recipe',
      // })
      //   .then((response) => console.log(response.items))
      //   .catch(console.error);
      await client.getEntries({
        content_type: 'recipe',
        select: 'fields',
        'metadata.tags.sys.id[all]': 'categoryVegan',
      })
        .then((response) => console.log(response.items))
        .catch(console.error);
      // await client.getEntry('7ipsLOLMKdPJEpxGD0M8rJ')
      //   .then((entry) => console.log(entry))
      //   .catch(console.error);
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello Gentlemen! Shall we cook?
      </h1>
    </div>
  );
};

export default App;

