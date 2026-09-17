import { useContext } from "react"
import { recipecontext } from "../context/Recipecontext"
import Recipecard from "../Components/Recipecard";

const Recipies = () => {

    const {data} = useContext(recipecontext);

    const renderrecipes = data.map((recipe) =>(
        <Recipecard key = {recipe.id} recipe = {recipe}/>
    ))

  return (
    <div className='flex flex-wrap absolute top-25'>
        {data.length > 0 ? renderrecipes : "No Recipies Found"}
    </div>
  )
}

export default Recipies