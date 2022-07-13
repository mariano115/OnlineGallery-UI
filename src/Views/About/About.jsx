/* eslint-disable */
import React, { useEffect } from "react";
import { getPhotos } from '../../Services/PhotoService';
import CardDetails from '../../Components/Card-details/CardDetails';
import ORT from '../../Assets/ORT.jpg'
import Tecnologies from '../../Assets/Tecnologies.jpg'
import Tester from '../../Assets/Tester.jpg'
import AutomationTesting from '../../Assets/AutomationTesting.png'
import Agile from '../../Assets/Agile.png'
import ResponsiveLayout from '../../Layout/ResponsiveLayout/ResponsiveLayout';
import MarianoPhoto from '../../Assets/MarianoPhoto.jpg'
import Github from '../../Assets/Github.webp'
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="aboutPage centered">
      <div className="responsive-layout-button">
        <ResponsiveLayout />
      </div>
      <div className="headers">
        <div>
          <h1>About Me</h1>
          <h2>I'm a Full Stack Developer from Buenos Aires, Argentina</h2>
        </div>
        <div>
          <img src={MarianoPhoto} alt="Mariano German Guerrero Photo" className="mariano-photo"/></div>
      </div>
      <div className="cards-history">
        <CardDetails img={ORT} title="O.R.T Argentina" description="Technical System Analyst" />
        <CardDetails img={Tecnologies} title="Full Stack SSR developer" description="ReactJs, AngularJs, VueJs, NodeJs, SpringBoot, Docker, SQL and NoSql" />
        <CardDetails img={Tester} title="Qa Tester" description="Experience in Testing Designing and Executing Cases" />
        <CardDetails img={AutomationTesting} title="Qa Automation" description="Experience in Automation Testing using diferent tecnologies like Selenium, HP UFT, Jmeter, Jenkins" />
        <CardDetails img={Agile} title="Agile methodologies" description="Work experience with agile methodologies such as Scrum." />
        <a href="https://github.com/mariano115?tab=repositories" className="href-cards"><CardDetails img={Github} title="Github Projects" description="Multiple proyects in this platform" /></a>
      </div>
    </div>
  );
}

export default About;