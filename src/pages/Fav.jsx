import React from 'react'
import Recipecard from '../Components/Recipecard';

const Fav = () => {

  const Favourite = JSON.parse(localStorage.getItem("fav")|| "[]");
  
      const renderrecipes = Favourite.map((recipe) =>(
          <Recipecard key = {recipe.id} recipe = {recipe}/>
      ))
  
    return (
      <div className='flex flex-wrap absolute top-25'>
          {Favourite.length > 0 ? renderrecipes : "No Favourites Found"}
      </div>
    )
  }

export default Fav