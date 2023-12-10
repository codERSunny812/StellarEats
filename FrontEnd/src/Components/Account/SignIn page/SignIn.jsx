import React,{useState} from "react";
import "./signin.css";
import signinAnim from "./signIn.json";
import Lottie from "lottie-react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import {app} from '../../../../fireBaseConfig'


// create an instance of the app
const auth = getAuth(app);



const SignIn = (props) => {

   const[email,setEmail] = useState("");
   const[password,setPassword] = useState("");

   const signInUser = () =>{
    signInWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode + " " + errorMessage);
      })
   };



  console.log(props);
  return (
    <>
      <div className="loginContainer">
        <div className="mainsigninContainer">
          <div className="animation">
            <Lottie animationData={signinAnim} className="signinAnim" />
          </div>

          <div className="signinInfo">
            <h3>sign in</h3>

            <div className="signinData">
              <div className="signinEmail">
                <MdEmail />
                <input type="email" placeholder="enter your email"  id="email" onChange={e=>setEmail(e.target.value)} value={email}/>
              </div>
              <div className="signinPassWord">
                <RiLockPasswordFill />
                <input type="password" placeholder=" enter your password" id="password" onChange={e => setPassword(e.target.value)} value={password} />
              </div>

              <button type="submit" className="signinButton" id="btn" onClick={signInUser}>
                sign in
              </button>
            </div>

            <div className="endsigninData">
              <h4>or login with</h4>
              <div className="socialMediaOne">
                <BsTwitter />
                <label> log in with twitter</label>
              </div>
              <div className="socialMediaTwo">
                <FaFacebookF />
                <label>log in with facebook </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
