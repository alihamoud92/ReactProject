import React ,{ useEffect,useState } from 'react';
import {PortFolio,PortTitle,Span,PortUl,PortLi,Box,BoxImage,BoxP,BoxSpan} from './style.js';

import axios from 'axios';




const Portfolio = () => {
    const [images ,setImages] = useState([])

    useEffect (() => {
        axios.get('js/data.json').then(res => {setImages(res.data.portfolio)})
    } , [])


    const PortfolioImages = images.map((imageItem) => {
        return (
            <Box key={imageItem.id}>
            <BoxImage src={imageItem.image}/>
            <BoxP>
                <BoxSpan>
                    Show Image
                </BoxSpan>
            </BoxP>
        </Box>
        )
    })


    return(
      <PortFolio>
            <PortTitle><Span>My</Span> Portfolio</PortTitle>
            <PortUl>
                <PortLi active>All</PortLi>
                <PortLi>HTML</PortLi>
                <PortLi>Photoshop</PortLi>
                <PortLi>Wordpress</PortLi>
                <PortLi>Mobile</PortLi>
            </PortUl>
            
            <div className="box">
                
              {PortfolioImages}
                
               
                
            </div>
            
        </PortFolio>
    );
  }


export default Portfolio;
