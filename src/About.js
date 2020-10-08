import React, { Component } from 'react';
import TextBox from './comps/TextBox.js'
import './pages.css';



class About extends Component{

  data={ 
    title:"About Me",
    texts:"My name is Abdullah Al Nahian. I have a little bit knowledge about programming and electronics.",
  }

  
  render(){
      
    return (
      <div className="About">
        <TextBox title={this.data.title} titleColor="#f06292" align="left">
          
          {this.data.texts}<br/>
          
          My language skills:         
          <li>C++</li>
          <li>Javascript</li>
          <li>Python</li>
          <li>React</li>
          <li>Arduino</li>  

        </TextBox>
        <img src="./images/about.svg" width="300px" height="300px"/>

      </div>
    );
  }
}

export default About;