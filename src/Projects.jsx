import React from 'react';
import "./CSS/Project.css";
import certi from "./images/certificate-page.jpg";
import notes from "./images/notes.png";
import ecom from "./images/ecommerce.png";
import meeting from "./images/meeting.png";

const Projects = () => {
  return (
    <div className='Project-main'>
      <div className='heading'>Projects</div>

      <div className='project'>
        <a href='https://youtu.be/es2AAA1Lp00?si=YVqhK04Ab7SNJBvC'>
          <img src={notes} alt="Online Notes Sharing Website" />
        </a>
        <div className='title'>Online Notes Sharing Website</div>
        <div className='info'>
          A web application for sharing notes online, developed using Python Django, SQL, HTML, CSS, and PHP. Features user authentication and a user-friendly interface for easy notes creation, editing, and sharing.
        </div>
      </div>

      <div className='project'>
        <a href='https://youtu.be/V5qWIA-465s?si=mvT6Xc3847887jJg'>
          <img src={ecom} alt="E-Commerce Website" />
        </a>
        <div className='title'>E-Commerce Website</div>
        <div className='info'>
          A full-stack eCommerce website similar to Flipkart, built using React JS, MongoDB, NodeJS, HTML, and CSS. The project includes a responsive design, product display, cart functionality, and login/registration pages. The backend is powered by Express and MongoDB, with an admin panel for product management.
        </div>
      </div>

      <div className='project'>
        <a href='https://github.com/rahulnarode58/minutes-of-meeting'>
          <img src={meeting} alt="Minutes of Meeting" />
        </a>
        <div className='title'>Minutes of Meeting (Final Year Project)</div>
        <div className='info'>
          A project aimed at improving meeting efficiency and productivity by providing an accurate and concise record of meeting transactions. Built using Python, Django, SQL, HTML, CSS, and PHP.
        </div>
      </div>

      <div className='project'>
        <a href='https://drive.google.com/drive/u/1/folders/1vO3pHGzAdaesmPAURSKkU1wwZyr7gbN5/'>
          <img src={certi} alt="Certificate Page" />
        </a>
        <div className='title'>Certificate Page</div>
        <div className='info'>All certificates are uploaded and accessible via Google Drive.</div>
      </div>
    </div>
  );
};

export default Projects;
