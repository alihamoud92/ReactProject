import React  from 'react';
import { SkillsSection,Skillsprofile,Skillsh,Span,SkillsUl,SkillsLi,LiSpan,LiSpanWeb,SkillsSki,SkillsSkip,SkillsPar,SpanTitle,SpanPerc,DivParent,ParentSpan } from './style.js';

import axios from 'axios';



const Profile = () => {
  
    return(
      <SkillsSection>
      <div className="container">
          <Skillsprofile>
              <Skillsh><Span>My </Span>Profile</Skillsh>
              <SkillsUl>
                  <SkillsLi>
                      <LiSpan>Name</LiSpan>
                     Ali Hamoud
                  </SkillsLi>
                  <SkillsLi>
                      <LiSpan>Birthday</LiSpan>
                      20/11/1992
                  </SkillsLi>
                  <SkillsLi>
                      <LiSpan>Address</LiSpan>
                      Syria damascus
                  </SkillsLi>
                  <SkillsLi>
                      <LiSpan>Phone</LiSpan>
                      0993106812
                  </SkillsLi>
                  <SkillsLi>
                      <LiSpan>Email</LiSpan>
                      alihamoud624@gmail.com
                  </SkillsLi>
                  <SkillsLi>
                      <LiSpan>Website</LiSpan>
                      <LiSpanWeb >www.google.com</LiSpanWeb>
                  </SkillsLi>
              </SkillsUl>
          </Skillsprofile>
          
          <SkillsSki>
              <Skillsh>Some <Span>skills</Span></Skillsh>
              <SkillsSkip>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
              </SkillsSkip>
              <SkillsPar>
                  <SpanTitle>Bootstrap</SpanTitle>
                  <SpanPerc>100%</SpanPerc>
                  <DivParent>
                      <ParentSpan></ParentSpan>
                  </DivParent>
              </SkillsPar>
              
              <SkillsPar>
                  <SpanTitle>CSS3</SpanTitle>
                  <SpanPerc >90%</SpanPerc>
                  <DivParent>
                      <ParentSpan></ParentSpan>
                  </DivParent>
              </SkillsPar>
              
              <SkillsPar>
                  <SpanTitle>Photoshop</SpanTitle>
                  <SpanPerc>80%</SpanPerc>
                  <DivParent>
                      <ParentSpan></ParentSpan>
                  </DivParent>
              </SkillsPar>
          </SkillsSki>
          
      </div>
  </SkillsSection>
    );
  }


export default Profile;
