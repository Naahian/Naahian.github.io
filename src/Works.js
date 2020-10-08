import React, { Component } from 'react';
import Card from './comps/Card.js'
import './pages.css';



export default class Works extends Component{
  constructor(props){
    super();
    this.state={
      texts:"No-Bake Tangerine Cheesecake Recipe",
      title:"hello world"
    }
   
  }
  
  
  render(){
      
    return (
      <div className="Works">
        <h1>My Works</h1>
        <div>
          <Card url="https://naahian.github.io/ToDO-List/" color="#3500a4" title="Todo List"
          text="Pure javascript todo list with alarm."
          />
          <Card url="https://naahian.github.io/Web-Calculator/" color="#3500a4" title="JS Calculator"
          text="Pure javascript web Calculator."
          />
          <Card url="#" color="#3500a4" 
          text="coming soon..."
          />
          
      </div>
      </div>);
  }
}

