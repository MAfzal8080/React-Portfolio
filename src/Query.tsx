import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Query.css'
import Notify from './Notify';

type Data = {
    name: string,
    email: string,
    mobile: string,
    message: string,
    createdAt: string
}

const Query = () => {
    const [query, setQuery] = useState<Data[]>();
    const [msg, setMsg] = useState('')
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem('jwt')){
            navigate('/login')
        }
        fetchData();        
    }, [navigate])
    
    const fetchData = async ()=>{
        const jwtToken = localStorage.getItem('jwt');
        const data = await fetch('https://backend-7w9g.onrender.com/getquery', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": jwtToken as string,
            },
        });
        const json = await data.json();
        if(json){
            setQuery(json);  
        }else{
            setMsg("Unable to fetch data from database!");
        }
    }

  return (
    <>
    <div className="container py-5">
        <h1 className='text-light'>Queries...</h1>
        <div className="container-fluid rounded border bg-secondary text-light d-flex justify-content-center flex-wrap shell">
                {query && query.map((inquery, index)=>{
                    return (
                    <div className="container rounded border bg-dark text-light m-2 add" key={index}>
                        <h4>{inquery.name}</h4>
                        <ul className="d-flex flex-column">
                            <li>E-mail: {inquery.email}</li>
                            <li>Mobile number: {inquery.mobile}</li>
                            <li>Message: {inquery.message}</li>
                            <li>Date and time: {new Date(inquery.createdAt).toLocaleString()}</li>
                        </ul>
                    </div>
                    )
                })}
        </div>
    </div>
    <div className="d-flex">
        {msg && <Notify msg={msg} setMsg={setMsg} />}
      </div>
    </>
  )
}

export default Query
