import { motion } from "framer-motion";
import { useEffect } from "react";

interface parentProps{
    msg:string,
    setMsg: React.Dispatch<React.SetStateAction<string>>
  }

const Notify = (props:parentProps) => {
    const {msg, setMsg} = props;
    useEffect(()=>{
        setTimeout(() => {
            setMsg('');
        }, 2000);
    }, [setMsg]);
    
  return (
        <motion.div className="fixed-top bg-dark text-light text-center  m-4 rounded border border-light p-2" initial={{ opacity:0, scale:0 }} animate={{ opacity:1, scale:1 }} transition={{ duration: 0.3, delay:0.5,type:'spring' }} exit={{ opacity:0, scale:0 }} >
        <span>{msg}</span>
        </motion.div>
  )
}

export default Notify
