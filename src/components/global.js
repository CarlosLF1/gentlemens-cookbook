
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
                
                const patch =[]

              if (content.title) patch.push({
                op: 'add',
                path: '/fields/title/en-US',
                value: content.title
              })

              if (content.ingredients) patch.push({
                op: 'add',
                path: '/fields/ingredients/en-US',
                value: [content.ingredients, ...entry?.fields?.ingredients?.["en-US"]]
              })
              
   /*            patch.push({
                op: 'add',
                path: '/fields/datemodified/en-US',
                value: (new Date()).toISOString()
              })  */          
              
              if (content.star) {
                
                const currentStarAvr = entry?.fields?.avarageOfRatings?.["en-US"]||0
                const currentStarNmbr = entry?.fields?.numberofratings?.["en-US"]||0
                console.log("star info:",currentStarAvr, currentStarNmbr, entry)  
                patch.push({
                op: 'add',
                path: '/fields/numberofratings',
                value: currentStarNmbr+1
                })
                
                patch.push({
                    op: 'add',
                    path: '/fields/avarageOfRatings',
                    value: (content.star+(currentStarNmbr*currentStarAvr))/(currentStarNmbr+1)
                    })
                
              }             

                if (content.recipeInstructions) patch.push({
                    op: 'add',
                    path: '/fields/recipeInstructions/en-US',
                    value: content.recipeInstructions
                  })
                
                if (content.comments) patch.push({
                    op: 'add',
                    path: '/fields/comments/en-US',
                    value: [content.comments, ...entry?.fields?.comments?.["en-US"]]
                  })
                
                
                console.log (patch)
                
                if (patch.length>0)  entry.patch (patch)
            
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