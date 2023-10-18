import React, {Component} from 'react';


import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HomeSection, HomeInformation, HomeTitle, HomeInfo,HomeDesc,Span , But} from './style.js';




const Home = () => {
  
    return(
      
      <HomeSection>
          <div className="container">
              <HomeInformation>
                  <HomeTitle>Ali Hamoud</HomeTitle>
                  <HomeInfo>Creative Director</HomeInfo>
                  < HomeDesc>
                      Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                  </HomeDesc>
                  <But>Let's Begin</But>
              </HomeInformation>
          </div>
      </HomeSection>
    );
  }


export default Home;
