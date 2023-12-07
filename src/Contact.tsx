import axios from 'axios';
import React, { useState, useRef } from 'react';
import { motion } from "framer-motion";
import Stars from './Stars';
import Notify from './Notify';

const Contact = () => {
    const [query, setQuery] = useState({name: '', email:'', mobile:'', message: ''});
    const [msg, setMsg] = useState('');
    const ref = useRef<HTMLFormElement | null>(null)
    const handlechange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setQuery({...query, [e.target.name]: e.target.value});
    }
    const submit = (e:React.FormEvent)=>{
      if(query.name == '' && query.email == '' && query.mobile == '' && query.message == ''){
        setMsg('Name, email, mobile number and message is required!')
      } else{
             e.preventDefault();
               axios.post('https://backend-7w9g.onrender.com/query', {
                   "name": query['name'],
                   "email" : query["email"],
                   "mobile": query["mobile"],
                   "message": query["message"]
               }).then((res)=>{
                   setMsg(res.data.message);
                   setQuery({name: '', email:'', mobile:'', message: ''})
                   if (ref.current) {
                    ref.current.reset();
                  }
               }).catch((err)=>{
                   setMsg(err);
               });

           }
    };
  return (
    <>
      <h1 className="text-light d-block text-center" id='contact'>Contact</h1>
      <motion.div className={`container d-${window.innerWidth >900 ? 'flex' : 'block'} my-4 boot`} initial={{ opacity:0, scale:0 }} whileInView={{ opacity:1, scale:1 }} transition={{ duration: 0.3 }} viewport={{ once: true }} >
          <Stars></Stars>
          <div className="text-center d-flex justify-content-center">
            <form className='rounded p-2 border' ref={ref}>
              <h3 className='text-light'>Get in touch</h3>
              <input className='form-control bg-dark text-light' type="text" name='name' placeholder='Enter your name' onChange={handlechange} required/><br />
              <input className='form-control bg-dark text-light' type="email" name="email" placeholder='Enter your email' onChange={handlechange} required/> <br />
              <input className='form-control bg-dark text-light' type="text" name="mobile" placeholder='Enter your mobile number' onChange={handlechange} required/> <br />
              <textarea className='form-control bg-dark text-light' name="message" id="" cols={30} rows={5} placeholder='Type your message' onChange={handlechange} required></textarea>
              <input className='btn btn-primary m-3' type="submit" value="Submit" onClick={submit} />
              <input className='btn btn-primary m-3' type="reset" value="Reset" />
            </form>
          </div> 
      </motion.div>
      <div className="d-flex">
        {msg && <Notify msg={msg} setMsg={setMsg} />}
      </div>
    </>
  )
}

export default Contact
