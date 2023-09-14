import { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [credentials, setCredentials] = useState({email:'', password:''})
  const [error, setError] = useState();
  const navigate = useNavigate();
  const handlechange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value});
  }

  const userLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();
    axios.post('http://localhost:5050/login', {
      "email": credentials['email'],
      "password": credentials['password']
    }).then((res)=>{
      navigate('/query');
      localStorage.setItem("jwt", res.data.token)
    }).catch((err)=>{
      console.log(err.response.data.error);
      setError(err.response.data.error);
      
    })
  }

  return (
    <div className='container d-flex justify-content-center py-5'>
      <div className="text-center my-4 w-50 rounded border p-2">
        <h3 className='text-light'>Login</h3>
        <Link className="nav-link" aria-current="page" to="/query">Fortfolio</Link>
        {error && error ?
        <span className='text-danger'>{error}</span> : ''
        }<br />
        <input className='form-control bg-dark text-light' type="text" name='email' placeholder='Enter your email' onChange={handlechange} /><br />
        <input className='form-control bg-dark text-light' type="password" name="password" placeholder='Enter your password' onChange={handlechange} /> <br />
        <button className='btn btn-primary' type='submit' onClick={userLogin}>Login</button>
      </div> 
    </div>
  )}


export default Login
