import React, { useState } from 'react'
import axois from 'axios'

function RegisterPage() {
  const[registerData,setRegisterData]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const handleChange = (e) =>{
    setRegisterData({...registerData,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    // Form validation
    if (!name || !email || !password || !confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try{
      const response = await post("")
    }
    catch(err){
      
    }
  }
  return (
    <div>
        <div className='register'>
            <form onSubmit={handleSubmit}>
                <h3>Register</h3>
                <label htmlFor="name">*Name</label>
                <input 
                type="text" 
                name='name'
                placeholder='Enter your Name'
                value={registerData.name}
                onChange={handleChange}
                
                />
                
                <label htmlFor="email">*Email</label>
                <input 
                type="email" 
                name='email'
                placeholder='Enter your Email'
                value={registerData.email}
                onChange={handleChange}
                
                />

                <label htmlFor="">*Password</label>
                <input 
                type="password" 
                name='password'
                placeholder='Enter your Password'
                value={registerData.password}
                onChange={handleChange}
                />

                <label htmlFor="">*Confirm password</label>
                <input 
                type="password" 
                name='ConfirmPassword'
                placeholder='Confirm your Password'
                value={registerData.confirmPassword}
                onChange={handleChange}
                />

                <button type='submit' >Registers</button>
            </form>
        </div>
    </div>
  )
}

export default RegisterPage