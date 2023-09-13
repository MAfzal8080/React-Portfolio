import { Link }from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false)
  const token = localStorage.getItem('jwt')
  
  function logoutUser() {
    localStorage.removeItem('jwt');
    navigate('/login');
  }

  const variants = {
    open: { opacity: 1, x: window.innerWidth < 500 ? "-50%" : 0 },
    closed: { opacity: 0, x: "100%" },
  }

  return (
    <>
      <div className="container-fluid d-flex topp mb-5">
        <span className='text-light mx-2 code'>Fortfolio</span>
        <div className="nav my-3 d-flex">
          <ul className="d-flex">
            <li className="nav-item mx-5">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item mx-5">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item mx-5">
              <a className="nav-link" href="#contact" data-toggle="modal" data-target="#myModal">Contact</a>
            </li>
              
          </ul>
              {token && token ? 
              <span className="nav-item">
                <button className='btn btn-danger' onClick={logoutUser}>Log Out</button>
              </span> : <span></span> }
        </div>
        <div className="burger mt-2" onClick={()=> setOpen(open=> !open)}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
        <motion.div className='menu bg-dark' variants={variants} animate={open ? "open" : "closed"}>
          <ul>
          <li className="nav-item" onClick={()=> setOpen(open=> !open)}>
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <hr />
            <li className="nav-item" onClick={()=> setOpen(open=> !open)}>
              <a className="nav-link" href="#about">About</a>
            </li>
            <hr />
            <li className="nav-item" onClick={()=> setOpen(open=> !open)}>
              <a className="nav-link" href="#contact" data-toggle="modal" data-target="#myModal">Contact</a>
            </li>
            <hr />
          </ul>
          <span className='align-middle'>
            <Link to="https://www.linkedin.com/in/mohammad-afzal-4b76a7260" target='_blank' className='text-white' onClick={()=> setOpen(open=> !open)}><i className="fa fa-github"></i></Link><hr />
            <Link to="https://github.com/MAfzal8080" target='_blank' className='text-white' onClick={()=> setOpen(open=> !open)}><i className="fa fa-linkedin-square"></i></Link><hr />
            <Link to="https://www.instagram.com/sfprobie/" target='_blank' className='text-white' onClick={()=> setOpen(open=> !open)}><i className="fa fa-instagram"></i>
          </Link><hr />
          {token && token ? 
              <span className="nav-item">
                <button className='btn btn-danger' onClick={logoutUser}>Log Out</button>
              </span> : <span></span> }
        </span>
        </motion.div>
      </div>
      <div className='sidebar text-light d-flex'>
        <span className='align-middle'>
          <Link to="https://www.linkedin.com/in/mohammad-afzal-4b76a7260" target='_blank' className='text-white'><i className="fa fa-github"></i></Link>
          <Link to="https://github.com/MAfzal8080" target='_blank' className='text-white'><i className="fa fa-linkedin-square"></i></Link>
          <Link to="https://www.instagram.com/sfprobie/" target='_blank' className='text-white'><i className="fa fa-instagram"></i></Link>
        </span>
      </div>
    </>
  )
}

export default Navbar
