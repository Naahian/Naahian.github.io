import React, { Component } from 'react';
import {social} from './data.json'

class Footer extends Component {

    render() { 
        return (<div className="Footer">

            <p>made my Abdullah Al Nahian</p>

            <section>
            {social.map((elm)=>{
                return <a href={elm.link} target="_blank">
                    <img src={elm.image} width="30px"/>
                </a>}
            )}
            </section>
        </div>);
    }
}
 
export default Footer;