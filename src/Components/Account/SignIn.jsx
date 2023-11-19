import React from 'react'
import './signin.css'
import signinAnim from './signIn.json'
import Lottie from 'lottie-react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";



const SignIn = () => {
    return (
        <>
            <div className="loginContainer">

                <div className="mainsigninContainer">

                    <div className="animation">
                        <Lottie animationData={signinAnim} className='signinAnim' />
                    </div>

                    <div className="signinInfo">
                        <h3>sign in</h3>

                        <div className="signinData">

                            <div className="signinEmail">
                                <MdEmail />
                                <input type="email" placeholder='enter your email' />
                            </div>
                            <div className="signinPassWord">
                                <RiLockPasswordFill />
                                <input type="password" placeholder=' enter your password' />
                            </div>



                            <button type="submit" className='signinButton'>sign in</button>

                        </div>


                        <div className="endsigninData">
                            <h4>or login with</h4>
                            <div className="socialMediaOne">
                                <BsTwitter />
                                <label > log in with twitter</label>
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
}

export default SignIn;