const contentful = require('contentful');
const user="1111"
const client = contentful.createClient({
    space: 'fx3pnargdzjr',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'XK9hAS_c-tQHK5UcRKKF-wUZhCUz8nE9ExQ5-9MD5qA',
  });

async function handleRecipe (content, method) {

    let result
    switch (method) {

        case "add": 
            client.createEntry(content.typeId, content.json)
            .then((entry) => result=entry)
            .catch(console.error)
        
            console.log (result)
            return result

        case "update": 
            client.getEntry(content.json.id)
            .then((entry) => {
            entry.fields.title['en-US'] = content.json.title
            
            
            return entry.update()
            })
            .then((entry) => result = `Entry ${entry.sys.id} updated.`)
            .catch(console.error)

            console.log (result)
            return result

        case "get":
            console.log ("getting from contentful",content)
            await client.getEntry(content)
                .then((entry) => result = entry)
                .catch(console.error)

            console.log (result)
            return result
        case "list":
            console.log ("getting list from contentful and client ",content, client)
            
            const entryquery = {};
            const tags= 'metadata.tags.sys.id[in]';
            const query = 'query'
            if (content.type) entryquery['content_type'] = content.type;
            if (content.order) entryquery['order'] = content.order;
            if (content.limit) entryquery['limit'] = content.limit;
            if (content.tags) entryquery[tags] = content.tags;
            if (content.query) entryquery[query] = content.query;

            result = await client.getEntries(entryquery)

            console.log('vegan list', result)

            return result.items

        case "delete":
            client.getEntry(content.json.id)
            .then((entry) => entry.delete())
            .then(() => result = "entry deleted")
            .catch(console.error)

            console.log (result)
            return result
            
        default:

    }
    return result
}


export {contentful, client, handleRecipe,user}