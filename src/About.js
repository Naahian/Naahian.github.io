import React, { Component } from 'react';
import TextBox from './comps/TextBox.js'
import './pages.css';
import {about} from './data.json'


class About extends Component{
  
  render(){
      
    return (
      <div className="About">
        <TextBox title="About Me" titleColor="#f06292" align="left">
          
          {about.detail} My language skills:  <br/>       
          {about.skills.map((elm)=>{return <li>{elm}</li>})}

        </TextBox>
        <img src={about.image} width="300px" height="300px"/>

      </div>
    );
  }
}

export default About;