import { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';
import './Home.css';
import About from "./About";
import Contact from "./Contact";
import ComputerCanvas from "./ComputerCanvas";
import { Link } from "react-router-dom";

const Home = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  const txt = 'Full Stack Development!';

  useEffect(() => {
    const typewriterInterval = setInterval(() => {
      if (index < txt.length) {
        setText((prevText) => prevText + txt[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else if(index >= txt.length && index < 2*(txt.length)) {
        setIndex((prevIndex) => prevIndex + 1)
        setText((prevText) => prevText.substring(0, 2*txt.length - index));
        if(index == 2*txt.length-1){ 
          setIndex(0);
          setText('');
        }
      }
       else {
        clearInterval(typewriterInterval); 
      }
    }, 150);

    return () => clearInterval(typewriterInterval); 

  }, [index]);

  return (
    <>
    <div className="container home">
      <div className="container d-flex first">
        <div className="container box">
          <span className="font-weight-bold">
            <h1>Hii,</h1>
            <span className="d-flex">
            <span className="font-weight-bold2">I'm <span className="text-warning">Mohammad Afzal</span></span>
            </span>
            <span className="font-weight-bold3">I'm into <span className="text-warning"> {text}</span><span className='cursor'>|</span>
            </span>
            <div className="container-fluid d-block my-2">
              <Link to="assets/Resume.pdf" target="_blank" className="btn btn-primary mx-2" download={true}>Download Resume</Link>
            </div>
          </span>
        </div>
        <div className="container">
          <ComputerCanvas />
        </div> 
      </div>
      
      <About></About>
      <Contact></Contact>
    </div>
    </>
  )
}


export default Home
