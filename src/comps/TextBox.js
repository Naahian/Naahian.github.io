import React, { Component } from 'react';
import './comp.css'
/*
props: title, children, className, align, color, titleColor
*/

class TextBox extends Component {

    TextBoxStyle = {
        color:this.props.color,
        textAlign: this.props.align,
        display:"block",
        
    }
    titleStyle={
        color:this.props.titleColor,
        fontWeight:"bold"
    }

        
    
    render() { 

        return (<section style={this.TextBoxStyle} className="TextBox">
            <h1 style={this.titleStyle}> {this.props.title} </h1>
            {this.props.children}
        </section>);
    }
}
 
export default TextBox;