import React, {components} from 'react';
import {AboutSection,AboutInfo,AboutTitle,Span,Abouth,AboutPar,Abouta} from './style.js';



const About = () => {
  
    return (
                    <AboutSection>
                    <div className="container">
                        <AboutInfo>
                            <AboutTitle><Span>This is</Span> Me</AboutTitle>
                            <Abouth>Creative Director</Abouth>
                            <AboutPar>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Abouta>explicabo</Abouta> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                            </AboutPar>
                            <AboutPar>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                            </AboutPar>
                        </AboutInfo>
                    </div>
            </AboutSection>
    )
  }


export default About;
