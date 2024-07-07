// import { useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
import { FaGraduationCap } from "react-icons/fa";
// import { GiSkills } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import { PiCertificateFill } from "react-icons/pi";
import { MdLocalActivity } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Ball from "./Ball";
import React from "react";

const About = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if(!localStorage.getItem('jwt')){
  //     navigate('/login');
  //   }
  // }, [])

  return (
    <div className="container">
      <h1 className="text-light text-center" id="about">About</h1>
      <div className="container">
        <div className="container">
          <h2 className="text-secondary">Skills</h2>
          <Ball />
          </div>
      
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaGraduationCap />}>
            <div className="container text-light">
              <h3>
                Education
              </h3>
              <ul className="d-flex flex-column">
              <li>
                  Master of Computer Application from Shri Ramswaroop Memorial College of Engineering and Managenent
                </li>
                <li>
                  Bachelor of Science in Mathematics from University of Lucknow
                </li>
                <li>12th from Baba Gurukul Academy</li>
                <li>10th from Akanksha Children Academy</li>
              </ul>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<AiFillProject />}>
            <div className="container text-light">
              <h3>
                Projects
              </h3>
              <ul className="d-flex flex-column">
                <li><a href="https://regal-pudding-0c7ce2.netlify.app/" target="_blank">Note taking app</a></li>
                <li>Image Gallery</li>
                <li>Youtube clone</li>
                <li>News app</li>
                {/* <li>OMDB app</li> */}
                <li>Crypto app</li>
                {/* <li>Text extractor</li> */}
                <li>Text editor</li>
                <li>Todo list</li>
              </ul>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BsPersonWorkspace />}>
            <div className="container text-light">
              <h3>
                Internship
              </h3>
              <ul>
                <li>Zedgon Solutions Pvt Ltd</li>
              </ul>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<PiCertificateFill />}>
              <div className="container text-light">
                <h3>
                  Certifications
                </h3>
                <ul className="d-flex flex-column">
                  {/* <li>Full stack development</li> */}
                  <li>O level</li>
                </ul>
              </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdLocalActivity />}>
              <div className="container text-light">
                <h3>
                  Extra curricular
                </h3>
                <ul className="d-flex flex-column">
                  <li>Taekwondo</li>
                  <li>Data collection activity</li>
                </ul>
              </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
        
      </div>
    </div>
  );
};

export default About;
