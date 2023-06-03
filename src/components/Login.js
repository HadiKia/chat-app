import React from "react";
import firebase from "firebase/app";
import { auth } from "../firebase";
import banner from "../assets/Messages-pana.svg";
import googleIcon from "../assets/google.svg";

// styles
const header = 'flex justify-between py-6 border-b md:mb-20'
const navButtons = "py-3 font-medium";
const main = "flex flex-col justify-between gap-y-4 md:flex-row-reverse md:items-start"
const bannerLogin = 'flex justify-center w-full md:justify-end'
const bannerLoginImg = "w-80 lg:w-96 xl:w-[500px] relative md:left-5"
const loginButton = "flex items-center gap-x-2 w-fit mx-auto md:mx-0 px-5 py-3 rounded-lg bg-[#b5e4ca] font-medium mb-10 active:scale-95 duration-700 select-none"

const Login = () => {
  return (
    <div>
      <div className="container max-w-screen-xl mx-auto px-5 text-[#202427]">
        <div className={header}>
          <div className="flex items-center ">
            <span className="w-10 h-10 rounded-full bg-[#202427] relative before:absolute before:-bottom-0 before:-left-2 before:rotate-[140deg] before:w-0 before:h-0 before:border-0 before:border-transparent before:border-b-[8px] before:border-t-[8px] before:border-l-[20px] before:border-l-[#202427]"></span>
            <span className="w-10 h-10 rounded-full bg-[#b5e4ca] relative right-3 before:absolute before:-bottom-0.5 before:-right-2.5 before:rotate-[35deg] before:w-0 before:h-0 before:border-0 before:border-transparent before:border-b-[8px] before:border-t-[8px] before:border-l-[20px] before:border-l-[#b5e4ca]"></span>
          </div>
          <div className="hidden md:flex items-center gap-x-10">
            <span className={navButtons}>Features</span>
            <span className={navButtons}>About us</span>
            <button onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())} className={`${navButtons} bg-[#b5e4ca] px-6 rounded-lg`}>
              Sing In
            </button>
          </div>
        </div>
        
        <div className={main}>
    
          <div className={bannerLogin}>
            <img
              src={banner}
              alt="logo"
              className={bannerLoginImg}
            />
          </div>

          <div className="text-left md:max-w-sm md:py-12 lg:py-14 lg:max-w-lg">
            <p className="w-fit py-2.5 px-6 text-sm font-medium rounded-xl bg-[#b5e4ca] mb-7 lg:mb-8 relative before:absolute before:-bottom-2.5 before:left-2.5 before:rotate-[120deg] before:w-0 before:h-0 before:border-0 before:border-transparent before:border-b-[8px] before:border-t-[8px] before:border-l-[20px] before:border-l-[#b5e4ca]">
              Hello, You!
            </p>
            <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-6">
              EASY CHAT WITH FRIENDS
            </h2>
            <p className="text-sm lg:text-base leading-6 mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              aspernatur, excepturi a enim beatae fugiat iste ducimus illum qui
              recusandae vel nihil? Laudantium nobis ea perspiciatis, ipsam
              deleniti aliquam quaerat?
            </p>
            <button onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())} className={loginButton}>
              <img src={googleIcon} alt="google" className="w-8" />
              <span>Sign in with Google</span> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
