import React, { useState } from 'react'

const Login = ({handleLogin}) => {


    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    

 const submitHandler =(e)=>{
    e.preventDefault();

    handleLogin(email,password);
    
    setEmail("");
    setPassword("");
    
    
 }
  return (
    <div className='w-screen h-screen  overflow-hidden bg-[#1c1c1c]' >


        <h2 className='flex items-center justify-center mb-20 mt-10 text-[5rem] font-semibold '>Login</h2>
    <div className='flex  items-center justify-center '>

       

       
        <div className='border-2  p-20 border-emerald-600 rounded-xl'>
            <form onSubmit={(e)=>{
                submitHandler(e);
            }} className='flex flex-col items-center justify-center'>
                <input type="email" value={email} onChange={(e)=>{
                    setEmail(e.target.value);

                }} required placeholder='Enter Your Email' className='text-white outline-none border-2  bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 ' />
                <input type="password" value={password} onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                 required placeholder='Enter Your Password' className='text-white outline-none border-2  bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400'/>
                <button className='  text-white hover:scale-105 transition-all duration-[0.3s] outline-none border-2  bg-emerald-600 border-emerald-600 text-xl py-3 px-24 rounded-full mt-5 placeholder:text-white'>Log In</button>
            </form>



        </div>
        

    </div>
    </div>
  )
}

export default Login