import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'
import './App.css'

function App() {
  return (
    <div className='w-screen p-5 bg-slate-200'>
      <div className='relative text-lg mb-6'>Redux Toolkit Store</div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/cart' element={<Cart></Cart>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
