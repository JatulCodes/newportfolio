import React, { Component } from 'react';
import './Portfolio.css';
import './utilities.css';

class Form extends Component {

    constructor(props){
        super(props);

        this.state={
            
            Yourname:"",
            email:"",
            YourSubject:"",
            YourMessage:""
    
    }
    }

    // handlename = (event)=>{

    //     this.setState({Yourname:event.target.value})
    // // console.log(event.target.value);      

    // }
    

    handlechangeall=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    handlesubmit=(event)=>{
        // alert(`My Name is ${this.state.Yourname}`)
        alert (JSON.stringify(this.state))
        event.preventDefault();
    }
    render() {
        return (
            <>
                <form onSubmit ={this.handlesubmit}>
                    <div className="input_wrap">
                        <input 
                        type="text"
                        name="Yourname"
                        value={this.state.Yourname}
                        onChange={this.handlechangeall}
                        placeholder="Your Name" />

                        <input 
                        type="email" 
                        name="email"
                        value={this.state.email} 
                        onChange={this.handlechangeall}
                        placeholder="Your Email" />
                    </div>
                    <div className=" input_wrap_2">
                        <input 
                        type="text" 
                        name="YourSubject"
                        value={this.state.YourSubject}
                        onChange={this.handlechangeall}
                        placeholder="Your Subject..." />

                        <textarea 
                        type="text"
                        name="YourMessage" 
                        value={this.state.YourMessage} 
                        onChange={this.handlechangeall}
                        id="" 
                        cols="30" 
                        rows="10" 
                        placeholder="Your Message"></textarea>
                    </div>
                    <div className="btn_wrapper">
                        <button 
                        type="submit" 
                        value="" 
                        
                        class="btn btn-primary">Send Message</button>
                    </div>
                </form>

            </>
        )
    }
}
export default Form;
