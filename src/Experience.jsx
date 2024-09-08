import React from "react";
import "./CSS/Experience.css";
import tcs from "./images/yeshshree.jpg"

import image1 from "./images/ybi.jfif"
import codechef from "./images/ibm.jpg"

const Experience = () => {
  return (
    <>

      <div className="ac-content">
      <div className='heading'>Experience</div>
        <div className="point">
          <img className="image" alt="leetcode" src={tcs}/>
          <hr/>
          <div className="text">
            Successfully completed a comprehensive internship at Yeshshree
          </div>
        </div>

        <div className="point">
          <img className="image" alt="leetcode" src={image1}/>
          <hr/>
          <div className="text">
           AI and Machine Learning Intern | YBI
          </div>
        </div>

        <div className="point">
          <a href="https://www.codechef.com/users/goresai19">
          <img className="image" alt="codechef" src={codechef}/>
          </a>
          <hr/>
          <div className="text">
         Front End Developer Intern | IBM - SKILLBUILD | (Remote) June 2023 - July 2023
          </div>
        </div>
    


        
      </div>
    </>
  );
};

export default Experience;
