import Navbar from './Components/Navbar'
import Mainroutes from './Routes/Mainroutes'

const App = () => {
  return (
    <div className="py-9 px-[20%] w-screen h-screen 
    text-white font-thin bg-gray-800">

  <Mainroutes/>
  <Navbar/>
    </div>
  )
}

export default App