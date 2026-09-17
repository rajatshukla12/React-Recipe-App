import { Link } from "react-router-dom";

const Recipecard = (props) => {

    const {id, image, title, desc, chef} = props.recipe;

  return (
   <Link to={`/recipies/details/${id}`}
   
   className="hover:scale-102 duration-140 relative left-[-3rem] mr-9 mb-3 w-[36vh] rounded overflow-hidden shadow">
        <img className="object-cover w-full h-[25vh]" src={image} alt="null" />
        <h1 className="mt-2 font-black tracking-tighter text-[1.2rem] w-[12rem]">{title}</h1>
        <p className="text-red-400">{chef}</p>
        <p className="mt-2 text-sm w-[12rem]">
            {desc.slice(0 , 100)}...{""}
            <small className="text-blue-400">more</small>
        </p>
   </Link>
  )
}

export default Recipecard