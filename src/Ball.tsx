import {Tilt} from 'react-tilt';
import './Ball.css';
import {motion} from 'framer-motion';

const img = ['html', 'css', 'javascript', 'reactjs','nextjs', 'angular', 'nodejs', 'redux', 'typescript', 'mongodb', 'git', 'python', 'django', 'sql', 'bootstrap', 'github', 'tailwind' ];

const Ball = () => {

  return (
    <>
      <div className="box">
        {img.map((i, index)=>{
          return(
              <Tilt classname='tilt' key={index}>
                <motion.div className="ins" initial={{ opacity:0, translateX:-90 }} animate={{ opacity:1, translateX:0 }} transition={{ duration: 0.3, delay: 0.3*index }} >
                  <img src={`assets/tech/${i}.png`} alt="icon" />
                </motion.div>
              </Tilt>
          )
        })} 
      </div>
    </>
  );
};

export default Ball;
