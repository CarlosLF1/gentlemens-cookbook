import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { handleRecipe } from '../components/global';
import Cards from "../components/Cards"


function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        
        console.log("recipe List for ", params.type)
        const content ={
          type:'recipe',
          tags:'category'+params.type,
          order:'-sys.createdAt'
         }
        console.log("recipe List for type and content", params.type, content)
        const myrcp =  await handleRecipe(content,"list")
        console.log("recipe List for category2", myrcp)
        setCuisine(myrcp)
        
    }

    useEffect(() => {
        getCuisine(params.type)
        // console.log(params.type);
    }, [params.type]);

    return (
        <Grid>
            {/* animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} */}
            
            {cuisine.map((item) => {
                return (
                    <Cards recipe={item} />
                )
            })}
        </Grid>
    );
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

export default Cuisine