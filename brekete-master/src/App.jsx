import React from 'react'
import Navbar from './Components/Navbar'

import {  BrowserRouter as Router , Routes, Route } from "react-router-dom"

import Home from './Pages/Home'
import Videos from './Pages/Videos'
import Give from './Pages/Give'
import About from './Pages/About'
import Signup from './Pages/Signup'
import AlbumTimeToFly from './Pages/AlbumTimeToFly'
import AdminsOnly from './Pages/AdminsOnly'




const App = () => {
  return (
    <div  className='App' >
            <Router >
         
                <div>
                      <Navbar/>

                   

                      <div>
                        
                        {/* <div    className='general'>
                        <Footer/>
                        </div> */}
               
                 
                
                      </div>
                </div>

             
                        <Routes>
                          <Route path='/' element={<Home/>}/>
                          <Route path='/Songs' element={<AlbumTimeToFly/>}/>
                          {/* <Route path='/videos' element={<Videos/>}/> */}
                          <Route path='/give-away' element={<Give/>}/>
                          <Route path='/about' element={<About/>}/>
                          <Route path='/signup' element={<Signup/>}/>
                          <Route path="/AlbumTimeToFly"  element={<AlbumTimeToFly/>}/>
                          <Route path="/Admin"  element={<AdminsOnly/>}/>
                          
                          
                        </Routes>

                        
                      
             </Router>
          
    </div>
   
  )
}

export default App
