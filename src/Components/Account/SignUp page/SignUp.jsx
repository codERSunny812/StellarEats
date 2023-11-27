import React, { useState } from "react";
import "./signUp.css";
import signUpAnim from "./signUp.json";
import Lottie from "lottie-react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import {getAuth,createUserWithEmailAndPassword}  from 'firebase/auth'
import {app} from '../../../../fireBaseConfig'

// create instance of app 
const auth = getAuth(app);


const SignUp = ({ onsucessFullSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //funciton
   const MainFunction = () => {
     const handleState = () => {
       onsucessFullSignUp();
     };

     const createUser = createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential)=>{
      const user = userCredential.user;
      console.log(user);
     })
     .catch((err)=>{
       const errorCode = err.code;
       const errorMessage = err.message;
       console.log(errorCode+ " " + errorMessage);
     })

     handleState();
     

   }

 
  return (
    <>
      <div className="loginContainer">
        <div className="mainSignUpContainer">
          <div className="animation">
            <Lottie animationData={signUpAnim} className="signUpAnim" />
          </div>

          <div className="signUpInfo">
            <h3>sign up</h3>

            <div className="signUpData">
              <div className="signUpName">
                <FaUser />
                <input type="text" placeholder="your name" id="name"/>
              </div>
              <div className="signUpEmail">
                <MdEmail />
                <input type="email" placeholder="enter your email"  id="email" onChange={e=> setEmail(e.target.value)}
                value={email}/>
              </div>
              <div className="signUpPassWord">
                <RiLockPasswordFill />
                <input type="password" placeholder=" enter your password" id="password" onChange={e => setPassword(e.target.value)}
                  value={password} />
              </div>

              <button
                type="submit"
                className="signUpButton"
                onClick={MainFunction}
              >
                sign up
              </button>
            </div>

            <div className="endSignUpData">
              <h4>or connect with social media</h4>
              <div className="socialMediaOne">
                <BsTwitter />
                <label> sign up with twitter</label>
              </div>
              <div className="socialMediaTwo">
                <FaFacebookF />
                <label>sign up with facebook </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
