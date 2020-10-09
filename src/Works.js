import React, { Component } from 'react';
import Card from './comps/Card.js'
import './pages.css';
import {works} from './data.json'


export default class Works extends Component{

  
  render(){
      
    return (
      <div className="Works">
        <h1>My Works</h1>
        <div>
          
          {works.map( (elm)=>{
            return <Card url={elm.link} color="#3500a4" title={elm.title}
            text={elm.text}/>
            }
          )}

          <Card url="#" color="#3500a4" 
          text="coming soon..."
          />
          
      </div>
      </div>);
  }
}

