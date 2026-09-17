import { Route, Routes } from "react-router-dom"
import About from "../pages/About"
import Recipies from "../pages/Recipies"
import Home from "../pages/Home"
import CreateRecipi from "../pages/CreateRecipi"
import SingleRecipe from "../pages/SingleRecipe"
import Pagenotfound from "../pages/Pagenotfound"
import Fav from "../pages/Fav"

const Mainroutes = () => {
  return (
    <Routes>

        <Route path="/" element = {<Home/>}/>
        <Route path="/recipies" element = {<Recipies/>}/>
        <Route path="recipies/details/:id" element = {<SingleRecipe/>}/>
        <Route path="/createrecipi" element = {<CreateRecipi/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/fav" element = {<Fav/>}/>
        <Route path="*" element = {<Pagenotfound/>}/>
        

    </Routes>
  )
}

export default Mainroutes