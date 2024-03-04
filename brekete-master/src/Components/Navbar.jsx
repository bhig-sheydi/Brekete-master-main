import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { auth,  } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"
import {useNavigate} from "react-router-dom"


const Navbar = () => {

const [user] = useAuthState(auth)
  const [reteaction , setRetraction] = useState( false)

  const navigate = useNavigate();

  const signUserOut =  async ()=>{
            signOut(auth)
            navigate("/")
            
  }

const retractionState =()=>{

  setRetraction(!reteaction)
}

  return (

           <div  className='navbar'  style={{height : reteaction && "100px"}} >
          <img src="\src\assets\img\M.png" alt=""   className='logo'  onClick={retractionState} />

       
          


                    <ul style={{visibility  : reteaction &&  "hidden"}}>
                    { !user || (
                              <>
                                              <li><Link to={"/"} >Home</Link></li>
                                              <li><Link to={"/songs"}>Music</Link></li>
                                              <li><Link to={"/give-away"}>Give Away</Link></li>
                                              <li><Link to={"/about"}>About</Link></li>
                                                                        

                                                       <div  className='logout-div'>
                                                          <p>{user?.displayName}</p>
                                                          <img  className='profile' src={user?.photoURL|| ""}  />
                                                          <button onClick={signUserOut} >Log out</button>
                                                        </div> 

                                              </>

                    )  }

                      

                    
                     
                      </ul>

                  

      
    </div>

  )
}

export default Navbar

