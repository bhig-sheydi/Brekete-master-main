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
          <img src="https://firebasestorage.googleapis.com/v0/b/brekete-4e8df.appspot.com/o/images%2FM.pngb9d1087e-645d-4971-a744-854b632ee598?alt=media&token=dbac259b-afc1-4a2f-9ef6-ad5456854197" alt=""   className='logo'  onClick={retractionState} />
               
       
          


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

