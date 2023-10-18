import React from 'react';
import { Link } from 'react-router-dom';
import  './style.js';
import styled from 'styled-components';
import { NavbarSection,Logo,LogoText,UlList,ListItem,Hre} from './style.js';



const Navbar = () => {
  
    return(
     
    <NavbarSection>
          
          <div className="container">
              
              <Logo>
                  <LogoText>The Magician</LogoText>
              </Logo>
              
             
              
              <UlList>
                  <ListItem><Link to="/">Home</Link></ListItem>
                  <ListItem><Hre href="#">Work</Hre></ListItem>
                  <ListItem><Hre href="#">Portfolio</Hre></ListItem>
                  <ListItem><Hre href="#">Resume</Hre></ListItem>
                  <ListItem><Hre href="#">About</Hre></ListItem>
                  <ListItem><Link to="/contact">Contact</Link></ListItem>
              </UlList>
              
          </div>
          
      </NavbarSection>
    )
  }


export default Navbar;
