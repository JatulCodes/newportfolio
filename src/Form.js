import React, { useState  } from 'react';
import './Portfolio.css';
import './utilities.css';




const ProxyUrl = "http://localhost:8000/clients";

const Form = ()=> {

    
        const[user,setUser]=useState({
            Name:"", email:"", Subject:"", Message:""
        });
        let name ,value;

    const  handleInputs=(event)=>{
        console.log(event);
        name =event.target.name;
        value=event.target.value;
        
        

        setUser({...user,[name]:value});
    }

    //Store data in database
    const PostData = async(event)=>{
        event.preventDefault();
        const { Name , email , Subject , Message } = user;

        const res = await fetch(ProxyUrl,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                Name,email,Subject,Message
            })
        });
        const data = await res.json();
        if(data.status === 422 || !data){
            window.alert("Email already exist please try again");
            console.log("invalid registration");
        }
        else{
            window.alert(" Registration succussfull");
            console.log(" Registration succussfull");
            
        }
    }

     
        return (
            <>
                <form  method ="POST">
                    <div className="input_wrap">
                        <input 
                        type="text"
                        name="Name"
                        value={user.Name}
                        onChange={handleInputs}
                        placeholder="Your Name" />

                        <input 
                        type="email" 
                        name="email"
                        value={user.email} 
                        onChange={handleInputs}
                        placeholder="Your Email" />
                    </div>
                    <div className=" input_wrap_2">
                        <input 
                        type="text" 
                        name="Subject"
                        value={user.Subject}
                        onChange={handleInputs}
                        placeholder="Your Subject..." />

                        <textarea 
                        type="text"
                        name="Message" 
                        value={user.Message} 
                        onChange={handleInputs}
                        id="" 
                        cols="30" 
                        rows="10" 
                        placeholder="Your Message"></textarea>
                    </div>
                    <div className="btn_wrapper" >
                        <button 
                        type="submit" 
                        value="" onClick={PostData}
                        
                        className="btn btn-primary">Send Message</button>
                    </div>
                </form>

            </>
        )
    }
export default Form;
