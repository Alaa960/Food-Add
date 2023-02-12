import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import {useParams} from 'react-router-dom';
function FoodInfo() {
  const [item ,setItem] = useState()
  const {MealId} = useParams();
  if(MealId != ''){
    fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
    .then(res => res.json())
    .then(data => {
      setItem(data.meals[0])
    })

  return (
    <div>
      {
        (!item) ? "" :(
          <>
            <Card key={MealId} className='rootInfo'>
              <CardMedia className='infoImage' image={item.strMealThumb}/>
              <CardContent>
                <div>
                  <Typography variant='h5'>
                    {item.strMeal}
                  </Typography>
                  <Typography variant='h7' color='textSecondary'>
                    {item.strArea} Food
                  </Typography>
                </div>
                <div>
                  <Typography variant='h6' color='textSecondary'>
                    Category {item.strCategory}
                  </Typography>
                </div>
                <div>
                  <Typography variant='h4'>
                    Ingredients
                  </Typography>
                  <Typography variant='body1'>
                    {item.strIngredient1} : {item.strMeasure1}
                  </Typography>
                  <Typography variant='body1'>
                    {item.strIngredient2} : {item.strMeasure2}
                  </Typography>
                  <Typography variant='body1'>
                    {item.strIngredient3} : {item.strMeasure3}
                  </Typography>
                  <Typography variant='body1'>
                    {item.strIngredient4} : {item.strMeasure4}
                  </Typography>
                  <Typography variant='body1'>
                    {item.strIngredient5} : {item.strMeasure5}
                  </Typography>
                  <Typography variant='body1'>
                    {item.strIngredient6} : {item.strMeasure6}
                  </Typography>
                  <Typography variant='body1'>
                    {item.strIngredient7} : {item.strMeasure7}
                  </Typography>
                  <Typography variant='body1'>
                    {item.strIngredient8} : {item.strMeasure8}
                  </Typography>
                </div>
                <div className='instrucions'>
                  <Typography variant='h4'>
                    Instruction
                  </Typography>
                  <Typography variant='body1'>
                    {item.strInstructions}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </>
        )
      }
    </div>
  )
}
}

export default FoodInfo