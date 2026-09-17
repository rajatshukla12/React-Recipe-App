import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-7 mb-10 text-sm">
        <NavLink className={(e) => e.isActive ? "text-red-300": ""} 
        to="/">Home
        </NavLink>

        <NavLink className={(e) => e.isActive ? "text-red-300": ""} 
        to="/recipies">Recipies
        </NavLink>

         <NavLink className={(e) => e.isActive ? "text-red-300": ""} 
        to="/about">About
        </NavLink>

         <NavLink className={(e) => e.isActive ? "text-red-300": ""} 
        to="/createrecipi">Create Recipe
        </NavLink>

         <NavLink className={(e) => e.isActive ? "text-red-300": ""} 
        to="/fav">Fav 
        </NavLink>



    </div>
  )
}

export default Navbar