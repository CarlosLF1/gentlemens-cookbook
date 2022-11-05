import React from 'react'
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { handleRecipe } from '../components/global';
import Cards from "../components/Cards";

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        console.log("recipe List for fulltext")
        const content ={
          type:'recipe',
          query:name,
          order:'-sys.createdAt'
         }
        const myrcp =  await handleRecipe(content,"list")
        console.log("recipe List for category2", myrcp)
        setSearchedRecipes(myrcp)
   
    };

    useEffect(() => {
        getSearched(params.search);
    },[params.search]);

    return <Grid>
        {searchedRecipes.map((item) => {
            return (
                <Cards key= {item.sys.id} recipe={item} />
            )
        })}
    </Grid>;

}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Searched