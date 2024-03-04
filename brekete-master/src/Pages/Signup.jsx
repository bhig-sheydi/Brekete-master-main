import React from 'react'
import {auth , provider} from "../config/firebase"
import {signInWithPopup} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import "../index.css"


const Signup = () => {
  const navigate = useNavigate();

  const signInWithGoogle =  async ()=>{

    



   const result =  await signInWithPopup(auth , provider)
        navigate("/songs")

  }
  return (
    <div className='Signup'>
          <div>

            <form action="">
              <span>First Name</span>
              <input type="text" />
              <span>Last Name</span>
              <input type="text" />
              <span>Emale/PhoneNumber</span>
              <input type="text" />
              <input type="submit" />
             
            </form>
       
          <button  onClick={signInWithGoogle}>SignUp with google</button>
          </div>
    </div>
  )
}

export default Signup
