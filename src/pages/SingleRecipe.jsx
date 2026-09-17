import { useContext, useEffect, useState } from "react"
import { recipecontext } from "../context/Recipecontext"
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
   const {data , setdata} = useContext(recipecontext);
    const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
   const navigate = useNavigate();
   const {register,handleSubmit} = useForm({
          defaultValues : {
          image : recipe?.image ,
          title : recipe?.title ,
          chef : recipe?.chef ,
          desc : recipe?.desc ,
          ingredients : recipe?.ingredients ,
          instructions : recipe?.instructions ,
          category : recipe?.category 
        }
      }
    );
  
      const SubmitHandler = (recipe) =>{
          const index = data.findIndex((recipe) => params.id == recipe.id);
          console.log(index)
          const copydata = [...data];
          copydata[index] = {...copydata[index],...recipe};
          setdata(copydata);
          localStorage.setItem("recipes", JSON.stringify(copydata))
          toast.success("Recipe updated");
      }




  const DeleteHandler = () =>{
    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));

    const favData = JSON.parse(localStorage.getItem("fav") || "[]");
    const filterFav = favData.filter((f) => String(f.id) !== String(params.id));
    localStorage.setItem("fav", JSON.stringify(filterFav));

    toast.success("Recipe deleted")
     navigate("/recipies");
  }
 

     /* useEffect(() =>{
      
        console.log("SingleRecipe.jsx mounted");
      
        return() =>{
          console.log("SingleRecipe.jsx unmounted");
        }
      
      }, [])*/

      const [Favourite, setFavourite] = useState(
        JSON.parse(localStorage.getItem("fav")) || [])

      const FavHandler = () => {
        let copyfav = [...Favourite]
        copyfav.push(recipe);
        setFavourite(copyfav);
        localStorage.setItem("fav", JSON.stringify(copyfav));
      }
 
      const UnFavHandler = () => {

        const filterfav = Favourite.filter((f) => f.id != recipe?.id);
        setFavourite(filterfav);
        localStorage.setItem("fav", JSON.stringify(filterfav));
      }

  return recipe ?(<div  className='absolute top-25'>

    <div className="w-full flex">

    <div className="relative left w-1/2 p-2">
    {Favourite.find((f) => f.id == recipe?.id)?(
       <i onClick={UnFavHandler}
        className="top-[5%] right-[35%] absolute text-3xl text-red-400 ri-poker-hearts-fill"></i>
    ) : (
      <i onClick={FavHandler} 
      className="top-[5%] right-[35%] absolute text-3xl text-red-400 ri-poker-hearts-line"></i>
    )}
    

     <h1 className="text-[2.4rem] relative right-[7rem] font-bold">{recipe.title}</h1>
     <img className="h-[25vh] relative top-6 left-[-7rem]" src={recipe?.image}/>
     <h3 className="text-[1.1rem] relative right-[6.6rem] top-8 text-red-400 font-medium">{recipe.chef}</h3>
     <p className="text-[1rem] relative top-12 right-[7rem] text-blue-300"><b>Description : </b>{recipe.desc}</p>
     <p className="text-[1rem] relative top-12 right-[7rem] text-blue-300"><b>Ingredients : </b>{recipe.Ingr}</p>
     <p className="text-[1rem] relative top-12 right-[7rem] text-blue-300"><b>Instruction : </b>{recipe.Inst}</p>
    </div>

    <div className="right w-1/2 p-2"></div>

       <form 
    onSubmit={handleSubmit(SubmitHandler)
    }
    
    className='absolute left-[25rem]'>


        <input
        className='block border-b outline-0 p-2'
        {...register ("image")}
        type='url'
        placeholder='Enter the image url'
        />
        <small className='text-red-400 text-[0.67rem]'>This is how error is shown</small>
   
        <input 
        className='block border-b outline-0 p-2 mt-2'
        {...register("title")}
        type='text'
        placeholder='Recipe Title'
        />
        

         <input 
        className='block border-b outline-0 p-2 mt-2'
        {...register("chef")}
        type='text'
        placeholder='Chef Name'
        />
       

        <input
        className='block border-b outline-0 p-2 mt-2'
        {...register("desc")}
        placeholder='Enter the Description'
        />
        

          <input
        className='block border-b outline-0 p-2 mt-2'
        {...register("Ingr")}
        placeholder='write ingredients'
        />
        

          <input
        className='block border-b outline-0 p-2 mt-2' 
        {...register("Inst")}
        placeholder='Enter related instructions'
        />
         

        <select
            className='block border-b outline-0 p-2 bg-gray-800 relative top-4'
            {...register("Category")} 
           >

            <option value= "Breakfast">Breakfast</option>
            <option value= "Lunch">Lunch</option>
            <option value= "Supper">Supper</option>
            <option value= "Dinner">Dinner</option>

            </select>

         <button  className='block text-[1.2rem] h-[3.5rem] mt-5 relative top-12 bg-blue-900 px-4 py-2 rounded bottom-[-5rem]'>Update Recipe</button>

          <button 
          onClick={DeleteHandler}
          className='block text-[1.2rem] h-[3.5rem]  relative top-[-0.5rem] left-[11rem] bg-red-900 px-4 py-2 rounded bottom-[-5rem]'>Delete Recipe</button>
    </form>

  </div>    
    
  </div>) : (
    "Loading..."
  );
  
}

export default SingleRecipe