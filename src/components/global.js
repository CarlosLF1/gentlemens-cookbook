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
            console.log ("getting list from contentful",content, client)
            client.getEntries({
                content_type: content.cat,
                order: content.order,
                limit:content.limit
                })
              .then((response) => result= response.items)
              .catch(console.error)

            return result
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