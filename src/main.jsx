import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Recipecontext from './context/Recipecontext.jsx'
import 'remixicon/fonts/remixicon.css'

createRoot(document.getElementById('root')).render(
    <Recipecontext>
  <BrowserRouter>

    <App />

    <ToastContainer/>

  </BrowserRouter>
 </Recipecontext>
)
