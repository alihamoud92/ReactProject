import React , {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import Index from './Components/Index';
import Navbar from './Components/Navbar';








class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/contact" element={<Contact/>}/>

        </Routes>
       
       
        
         
        
        
      </BrowserRouter>
        
      
    
    );
  }
}

export default App;
