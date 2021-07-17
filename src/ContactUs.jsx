
import React from 'react';
import './Portfolio.css';
import './utilities.css';
import Form from './Form';


class Contact extends React.Component{
    render(){

        return(

            <>
            <section class="contact">
        <div class="container">
            <h1 class="section_heading"><span>Contact</span> Us</h1>
            <p>We provide high standard website for your business solution</p>
            <div class="card_wrapper">
                <div class="card">
                    <img src="/images/contact_1.png" alt=""/>
                    <h2>Call Us On</h2>
                    <h6>+8130080818</h6>
                </div>
                <div class="card">
                    <img src="/images/contact_3.png" alt=""/>
                    <h2>Email Us</h2>
                    <h6>jatulkashh@gmail.com</h6>
                </div>
                <div class="card">
                    <img src="/images/contact_2.png" alt=""/>
                    <h2>Visit Office</h2>
                    <h6> At Home</h6>
                </div>
                
            </div>
            
            <Form/>
        </div>
    </section>


            </>
        )
    }
}
export default Contact;