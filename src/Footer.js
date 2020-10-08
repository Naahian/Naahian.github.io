import React, { Component } from 'react';
class Footer extends Component {

    render() { 
        return (<div className="Footer">
            <p>made my Abdullah Al Nahian</p>
            <section>
            <a href="https://www.facebook.com/abdullahal.nahian.18/" target="_blank">
                <img src="images/facebook.svg" width="30px"/>
            </a>
            <a href="https://www.linkedin.com/in/abdullah-al-nahian-3286841b1/" target="_blank">
                <img src="images/linkedin.svg" width="30px"/>
            </a>
            <a href="https://github.com/Naahian" target="_blank">
                <img src="images/github.svg" width="30px"/>
            </a>    
            </section>
        </div>);
    }
}
 
export default Footer;