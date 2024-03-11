import React, { useState } from 'react';
import { auth, provider } from "../config/firebase";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import "../index.css";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
      navigate("/songs");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    } finally {
      setLoading(false);
    }
  };

  const signInWithEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error signing in with email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='Signup'>
      <div>
        <form onSubmit={signInWithEmail}>
          <span>User Name</span>
          <input type="text" name="username" />
          <span>Password</span>
          <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} />
          <span>Email/PhoneNumber</span>
          <input type="text" name="email" onChange={(e) => { setEmail(e.target.value) }} />
          <input type="submit" value={loading ? 'Signing up...' : 'Sign Up'} disabled={loading} />
        </form>
        <button onClick={signInWithGoogle} disabled={loading}>
          {loading ? 'Signing up with Google...' : 'Sign Up with Google'}
        </button>
      </div>
    </div>
  );
}

export default Signup;
