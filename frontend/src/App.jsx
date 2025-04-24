import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <div className="pages">
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  )
}

export default App
