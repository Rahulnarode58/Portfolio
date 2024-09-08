import React from 'react';
import './CSS/Skills.css';
import python from './images/python.jfif'; 
import c from './images/c.jfif';
import js from './images/js.png';
import sql from './images/sql.png';
import php from './images/php.png';
import html from './images/html.png';
import css from './images/css.png';
import django from './images/django.png';
import react from './images/reactjs.png';
import bootstrap from './images/bootstrap.png';
import tailwind from './images/tailwind.png';
import mysql from './images/mysql.png';
import mongo from './images/mongodb.png';
import git from './images/git.png';
import github from './images/github.png';
import googlecloud from './images/googlecloud.png';

const Skills = () => {
  return (
    <>
      <div className="skills-container">
        <div className="heading">
          Skills
        </div>

        <div className="bars-box">
          <img className="skill-css" src={python} alt="Python logo" />
          <h3>Python</h3>
        </div>

        <div className="bars-box">
          <img className="skill-css" src={c} alt="C logo" />
          <h3>C</h3>
        </div>

        <div className="bars-box">
          <img className="skill-css" src={js} alt="JavaScript logo" />
          <h3>JavaScript</h3>
        </div>

        <div className="bars-box">
          <img className="skill-css" src={sql} alt="SQL logo" />
          <h3>SQL</h3>
        </div>

        <div className="bars-box">
          <img className="skill-css" src={php} alt="PHP logo" />
          <h3>PHP</h3>
        </div>

        <div className="bars-box">
          <img className="skill-css" src={html} alt="HTML logo" />
          <h3>HTML</h3>
        </div>

        <div className="bars-box">
          <img className="skill-css" src={css} alt="CSS logo" />
          <h3>CSS</h3>
        </div>

        <div className="bars-box">
          <img className="skill-css" src={django} alt="Django logo" />
          <h3>Django</h3>
        </div>

        <div className="bars-box">
          <img className="skill-css" src={react} alt="React.js logo" />
          <h3>React.js</h3>
        </div>

        <div className="bars-box">
          <img className="skill-css" src={bootstrap} alt="Bootstrap logo" />
          <h3>Bootstrap</h3>
        </div>

        <div className="bars-box">
          <img className="skill-css" src={tailwind} alt="Tailwind CSS logo" />
          <h3>Tailwind CSS</h3>
        </div>

        <div className="bars-box">
          <img className="skill-css" src={mysql} alt="MySQL logo" />
          <h3>MySQL</h3>
        </div>

        <div className="bars-box">
          <img className="skill-css" src={mongo} alt="MongoDB logo" />
          <h3>MongoDB</h3>
        </div>

        <div className="bars-box">
          <img className="skill-css" src={git} alt="Git logo" />
          <h3>Git</h3>
        </div>

        <div className="bars-box">
          <img className="skill-css" src={github} alt="GitHub logo" />
          <h3>GitHub</h3>
        </div>

        <div className="bars-box">
          <img className="skill-css" src={googlecloud} alt="Google Cloud logo" />
          <h3>Google Cloud</h3>
        </div>
      </div>
    </>
  );
};

export default Skills;
