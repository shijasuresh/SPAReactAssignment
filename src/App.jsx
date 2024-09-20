import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import About from "./pages/About";

function App() {
  return(
    <>

      <p className="text-4xl text-center mt-24 font-black">Welcome to React !!!</p>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App;