import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FoodCards from './FoodCards';

function FoodCard() {
    const [url , setUrl]= useState('https:/www.themealdb.com/api/json/v1/1/search.php?f=a');
    const [item , setItem] = useState([]);
    const [show , setShow] = useState(false);
    const [search , setSearch] = useState('');
    const searchFood = (evt) => {
        if(evt.key === "Enter"){
            setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }
    useEffect(()=> {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data.meals);
            setItem(data.meals);
            setShow(true);
        })
    },[url])
    
  return (
    <main>
        <Grid container justifyContent='cetner' spacing={4}>
            {item.map((product)=>(
                <Grid key={product.idMeal} item xs={12} sm={12} md={4} lg={3}>
                    <FoodCards product={product}/>
                </Grid>
            ))}
        </Grid>
        <input
                        type='text'
                        className='search-food' 
                        placeholder='Enter the name of the food ....' 
                        onChange={e => setSearch(e.target.value)}
                        onKeyPress={searchFood}
        />
    </main>
  )
}

export default FoodCard