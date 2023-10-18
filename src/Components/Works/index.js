import React, { Component } from 'react';
import { WorkSection,WorkTitle,Span, Part, Icon,PartTitle,Line,PartDesc } from './style.js';
import axios from 'axios';
import { toHaveAccessibleName } from '@testing-library/jest-dom/matchers.js';



class Works extends Component   {
   
    state = {
        works : []
    }
   
   
   
    componentDidMount() {
        axios.get('/js/data.json').then(res => {this.setState({works:res.data.works})})
    }
  
  
  
    render (){
  
        const {works}= this.state;
        const workList= works.map((workItem) => {
            return(
                <Part key={workItem.id}>
                <Icon className={workItem.icon_name}></Icon>
                <PartTitle>{workItem.title}</PartTitle>
                <Line/>
                <PartDesc>
                {workItem.body}

                </PartDesc>
            </Part>
            );
        })
   

    return(
        <WorkSection>
        <div className="container">
            <WorkTitle><Span>My</Span> Work</WorkTitle>
          
            {workList}
           
            
        </div>
    </WorkSection>
    );
  }
}

export default Works;
