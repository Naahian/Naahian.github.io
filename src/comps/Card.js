import React, { Component } from 'react';
import './comp.css'
// props: className title btn url text color

class Card extends Component {

    CardStyle = {

        padding:"1%",
        textAlign:"left",        
        textDecoration: "none",
        color:this.props.color,
        
    }


    render() { 


        return (<a href={this.props.url} style={this.CardStyle} className="Card" target="_blank">

            {(this.props.image)? <img src={this.props.image} width="100%" height="40%"/>:undefined}
            
            <h3 style={{color:this.props.titleColor}}> {this.props.title} </h3>
            <p> {this.props.text} </p>

        </a>);
    }
}
 
export default Card;