import React from 'react'
import "./App.css"
import twitter from "./images/Twitter.png"
import linkedin from "./images/linkedin.png"
import github from "./images/github.png"
import GeeksforGeeks from "./images/gfg.png"
import resume from "./images/Rahul_Narode_Resume.pdf" 

function Nav() {
  return (
    <div className="navbar">
      <a className='option' href="#main">Home</a>
      <a className='option' href="#projects">Projects</a>
      <a className='option' href="#experience">Experience</a>
      <a className='option' href="#skills">Skills</a>
      <a className='option' href="#contact">Contact</a>
      <a className='option' href={resume} download="RahulNarode_Resume.pdf">Download Resume</a> {/* Resume Download Link */}
  
      <div className='socials'>
        <a href="https://twitter.com/RahulNarod17133"><img src={twitter} alt="twitter" /></a>
        <a href="https://www.linkedin.com/in/rahul-narode-3039a6212"><img src={linkedin} alt="linkedin" /></a>
        <a href="https://github.com/Rahulnarode58"><img src={github} alt="github" /></a>
        <a href="https://www.geeksforgeeks.org/user/rahulnarode58/"><img src={GeeksforGeeks} alt="GFG" /></a>
      </div>
    </div>
  )
}

export default Nav;
