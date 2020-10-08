import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  About from './About';
import  Works from './Works';
import  Hero from './Hero';
import  Footer from './Footer';

ReactDOM.render(
  <Hero/>
,
document.getElementById('hero')
);

ReactDOM.render(
  <About/>
,
document.getElementById('about')
);

ReactDOM.render(
  <Works/>
,
document.getElementById('work')
);

ReactDOM.render(
  <Footer/>
,
document.getElementById('footer')
);


