import {expandN} from "regex-to-strings"

const contentful = require('contentful-management');

const client = contentful.createClient({
  accessToken: 'CFPAT-7W8wkezLVlNwPbzz2YTP4W5NFQYhFRl2ozo23yBUcTk',
});

// react-uuid package for ID
export const generateID = () => expandN(/^[a-zA-Z0-9-_.]{1,64}$/, 1)[0];

export const createUser = async (username, password, email, id) => {
  await client.getSpace(`${process.env.REACT_APP_SPACE_ID}`)
    .then((space) => space.getEnvironment(`${process.env.REACT_APP_ENVIRONMENT_ID}`))
    .then((environment) => environment.createEntryWithId(
      'user',
      `${id}`,
      {
        fields: {
          username: {
            'en-US': `${username}`,
          },
          password: {
            'en-US': `${password}`,
          },
          email: {
            'en-US': `${email}`,
          },
        },
      },
    ))
    .then((entry) => entry.publish())
    .then((entry) => console.log(entry))
    .catch(console.error);
};

// Update entry
export const updateUser = async () => {
  await client.getSpace(`${process.env.REACT_APP_SPACE_ID}`)
    .then((space) => space.getEnvironment(`${process.env.REACT_APP_ENVIRONMENT_ID}`))
    .then((environment) => environment.getEntry('<entry_id>'))
    .then((entry) => {
      entry.fields.title['en-US'] = 'New entry title';
      return entry.update();
    })
    .then((entry) => console.log(`Entry ${entry.sys.id} updated.`))
    .catch(console.error);
};
