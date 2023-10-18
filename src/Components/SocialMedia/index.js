import React, { Component } from 'react';
import {SocialSection,Social,SocialIcon,SocialPar,Span,SpanInfo} from './style.js';
import axios from 'axios';


class SocialMedia extends Component{

  state = {
    
      social: []
    
  }

  componentDidMount() {
    axios.get('/js/data.json').then(res => {this.setState({social:res.data.social})})
}




  render(){
   const {social} = this.state;
   const SocialList = social.map((SocialItem) =>{
    return(
      <Social item={SocialItem.id}  key={SocialItem.id}>
      <SocialIcon className={SocialItem.icon_name} ></SocialIcon>
      <SocialPar>
          <Span>{SocialItem.title}</Span>
          <SpanInfo>{SocialItem.body}</SpanInfo>
      </SocialPar>
  </Social>
    );
   })
    return (
      <SocialSection>
            
      {SocialList}
      
     
      </SocialSection>
    
    );
  }
  
  }


export default SocialMedia;
