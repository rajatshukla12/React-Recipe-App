import { nanoid } from 'nanoid';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/Recipecontext';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';

const CreateRecipi = () => {

    const navigate = useNavigate();
    const {data , setdata} = useContext(recipecontext);
    const {register , handleSubmit , reset} = useForm();

    const SubmitHandler = (recipe) =>{
        recipe.id = nanoid();

       const copydata = [...data];
       copydata.push(recipe);
       setdata(copydata);
       localStorage.setItem("recipes", JSON.stringify(copydata));
       toast.success("New Recipe Created!")
       reset();
      navigate("/recipies");
    }

  return (
    <form 
    onSubmit={handleSubmit(SubmitHandler)}
    
    className='absolute top-22'>


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
         <small className='text-red-400 text-[0.67rem]'>This is how error is shown</small>

         <input 
        className='block border-b outline-0 p-2 mt-2'
        {...register("chef")}
        type='text'
        placeholder='Chef Name'
        />
        <small className='text-red-400 text-[0.67rem]'>This is how error is shown</small>

        <input
        className='block border-b outline-0 p-2 mt-2'
        {...register("desc")}
        placeholder='Enter the Description'
        />
         <small className='text-red-400 text-[0.67rem]'>This is how error is shown</small>

          <input
        className='block border-b outline-0 p-2 mt-2'
        {...register("Ingr")}
        placeholder='write ingredients'
        />
         <small className='text-red-400 text-[0.67rem]'>This is how error is shown</small>

          <input
        className='block border-b outline-0 p-2 mt-2' 
        {...register("Inst")}
        placeholder='Enter related instructions'
        />
         <small className='text-red-400 text-[0.67rem]'>This is how error is shown</small>

        <button className='block mt-5 absolute left-[14rem] bg-gray-900 px-4 py-2 rounded bottom-[-5rem]'>Save Recipe</button>

        <select
            className='block border-b outline-0 p-2 bg-gray-800 relative top-4'
            {...register("Category")} 
           >

            <option value= "Breakfast">Breakfast</option>
            <option value= "Lunch">Lunch</option>
            <option value= "Supper">Supper</option>
            <option value= "Dinner">Dinner</option>

            </select>
    </form>

  )
}

export default CreateRecipi