import React , {Component} from 'react';

import About from './../About';
import Footer from './../Footer';
import Home from './../Home';
import Portfolio from './../Portfolio';
import Profile from './../Profile';
import SocialMedia from './../SocialMedia';
import Works from '../Works';





class Index extends Component {
  render(){
    return(
      <div>
          <Home/>
          <Works/>
         <Portfolio/>
         <Profile/>
         <About/>
         <SocialMedia/>
         <Footer/>
  
      </div>
       
    );
  }
}

export default Index;
