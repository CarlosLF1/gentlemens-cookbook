const contentful = require('contentful');
const contentfulmng = require('contentful-management')
const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE,
    environment: process.env.REACT_APP_ENVIRONMENT, // defaults to 'master' if not set
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  });

const clientmng = contentfulmng.createClient({
    accessToken: process.env.REACT_APP_MANAGEMENT_ACCESS_TOKEN,
  });

console.log(process.env.REACT_APP_ENVIRONMENT)

async function handleRecipe (content, method) {

    let result
    switch (method) {

        case "add": 
 
            return result

        case "update": 
            console.log("update content comments length", content, content.comments.length)
            await clientmng.getSpace('fx3pnargdzjr')
            .then((space) => space.getEnvironment('master'))
            .then((environment) => environment.getEntry(content.id))
            .then(async (entry) => {
                console.log ("entry before",entry) 
/*                 if (content.title) entry.fields.title = content.title
                if (content.ingredients) entry.fields.ingredients = content.ingredients
                if (content.comments) {
                    if (entry?.fields?.comments?.["en-US"]?.length>0) {
                        entry.fields.comments['en-US']=[...entry?.fields?.comments?.["en-US"], content.comments]
                    } else entry.fields.comments=JSON.stringify([content.comments])
                }   
                
               
                if (content.dateModified) entry.fields.dateModified = content.dateModified
                if (content.avarageOfRatings) entry.fields.avarageOfRatings = content.avarageOfRatings
                if (content.mealThumb) entry.fields.mealThumb = content.mealThumb
                if (content.numberofratings) entry.fields.numberofratings = content.numberofratings
                if (content.recipeInstructions) entry.fields.recipeInstructions = content.recipeInstructions
                
                console.log ("entry after",entry) 
                entry.update() */


                await entry.patch([
                    {
                      op: 'add',
                      path: '/fields/comments/en-US',
                      value: [content.comments,...entry?.fields?.comments?.["en-US"]]
                    }])

                result=entry
            })

            await clientmng.getSpace('fx3pnargdzjr')
            .then((space) => space.getEnvironment('master'))
            .then((environment) => environment.getEntry(content.id))
            .then(async (entry) => await entry.publish())

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
            if (content.type) entryquery['content_type'] = content.type;
            if (content.order) entryquery['order'] = content.order;
            if (content.limit) entryquery['limit'] = content.limit;
            if (content.tags) entryquery[tags] = content.tags;
            if (content.query) entryquery["query"] = content.query;

            result = await client.getEntries(entryquery)

            console.log('list for:', result, entryquery)

            return result.items
        //not implemented yet
        case "delete":
            
            return result
            
        default:

    }
    return result
}


export {contentful, client, handleRecipe}