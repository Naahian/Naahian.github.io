import React, { Component } from 'react';
import TextBox from './comps/TextBox'
import './pages.css'

export default class Hero extends Component {
    data={
        description:"I am a programming hobbyist and a learner. This github page is for my project showcase.",
    }


    render() { 

        return (<div style={{backgroundColor:"#200055"}}>
        <div className="Hero" >
            <h1 style={{color:"#fff",fontSize:"75px",fontWeight:"bold"}}>
                Hi,<br/>
                I am 
                <span style={{color:"#ffe731"}}> Nahian </span>
            </h1>
            <p style={{width:"40%"}}>
                {this.data.description}
            </p>
        </div>            
        </div>);
    }
}
 
