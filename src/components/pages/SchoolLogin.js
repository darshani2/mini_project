import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation';
import axios from 'axios';
import '../../App.css'

function SchoolLogin() {
    const [values, setValues] = useState({ 
        email : '',
        password: ''
    })
    const navigate = useNavigate();
    
    const [errors,setErrors] = useState({})
    const handleInput = (event) =>{
        setValues(prev =>({...prev,[event.target.name]:[event.target.value]}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === ""){
          axios.post('http://localhost:8081/login1', values)
          .then(res =>{
            if(res.data === "Success"){
              navigate('/schoolpage');        
            }else{
              alert("No record existed");
            }
            
          } )
          .catch(err => console.log(err));
    
        }
    }
    

  return (
    <div className='loginPage'>
        <div className='border'>
            <h2>Sign-In</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input type='email' placeholder='Enter Email' name='email' 
            onChange = {handleInput} className='form-control rounded-0'/>
            {errors.email && <span className='text-danger'>{errors.email}</span>}
        </div>
        <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input type='password' placeholder='Enter Password' name='password'
            onChange = {handleInput} className='form-control rounded-0'/>
             {errors.password && <span className='text-danger'>{errors.password}</span>}

        </div>
        <button type='submit' className='btn'>Log in</button>
        
        <div className='phg'>
        <p>Don't have an account?</p>
        </div>
        <Link to="/Signup" className='btn btn--block'>Create Account</Link>


      </form>
    </div>
    </div>
  )
}

export default SchoolLogin
