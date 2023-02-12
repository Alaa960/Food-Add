import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react';
import { useNavigate } from 'react-router-dom';
function FoodCards({ product }) {
    let navigate = useNavigate();
    return (
        <Card key={product.idMeal} className='root' onClick={() => { navigate(`/${product.idMeal}`) }}>
            <CardMedia className='product-image' image={product.strMealThumb} />
            <CardContent>
                <div className='product-content'>
                    <Typography variant='h6'>
                        {product.strMeal}
                    </Typography>
                    <Typography variant='h8'>
                        {product.strArea}
                    </Typography>
                </div>
                <Typography variant='body2' color='textSecondary'>
                    {product.strCategory}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className='show-descreption'>
            </CardActions>
        </Card>
    )
}

export default FoodCards