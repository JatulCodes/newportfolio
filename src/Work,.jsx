import React from 'react';
import './Portfolio.css';
import './utilities.css';
import  Cards from './Cards';
import  Sdata from './Sdata';


const Work =(props)=>{
    
      return (
          <>
          
          <section className="work">
        <div className="container">
            <h1 className="section_heading"><span>Our</span> Work</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deserunt?
            </p>
            <div className="card_wrapper">
                <div className="card">
                    <div className="over_lay">
                        <span> Category</span>
                        <a href="#">Web Development</a>
                    </div>
                    <img src="/images/work_1.jpg" alt=""/>
                </div>
                <div className="card">
                    <div className="over_lay">
                        <span> Category</span>
                        <a href="#">Web Development</a>
                    </div>
                    <img src="/images/work_2.jpg" alt=""/>
                </div>
                <div className="card">
                    <div className="over_lay">
                        <span> Category</span>
                        <a href="#">Web Development</a>
                    </div>
                    <img src="/images/work_3.jpg" alt=""/>
                </div>
                <div className="card">
                    <div className="over_lay">
                        <span> Category</span>
                        <a href="#">Web Development</a>
                    </div>
                    <img src="/images/work_4.jpg" alt=""/>
                </div>
                <div className="card">
                    <div className="over_lay">
                        <span> Category</span>
                        <a href="#">Web Development</a>
                    </div>
                    <img src="/images/work_5.jpg" alt=""/>
                </div>
                <div className="card">
                    <div className="over_lay">
                        <span> Category</span>
                        <a href="#">Web Development</a>
                    </div>
                    <img src="/images/work_6.jpg" alt=""/>
                </div>
            </div>
        </div>
    </section>
          </>
      );
    }
    
export default Work;
