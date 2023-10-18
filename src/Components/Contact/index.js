import React from 'react';
import {ContactSection,ContactTitle,Span,Form,InputForm,InputText,InputEmail,InputExp,ContactText,Sub} from './style.js';



const Contact = () => {
  return(
  <ContactSection>
  <div className="container">
      <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
      <Form action="">
          <InputForm>
              <InputText type="text" placeholder="Your Name"/>
              <InputEmail type="email" placeholder="Your Email"/>
          </InputForm>
          <InputExp type="text" class="sub" placeholder="Your Subject"/>
          <ContactText cols="30" rows="10" placeholder="Your Message"></ContactText>
          <Sub type="submit" value="Send Message"/>
      </Form>
  </div>
</ContactSection>
   );
  }


export default Contact;
