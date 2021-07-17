import React from 'react';
import './Portfolio.css';
import './utilities.css';
import  Cards from './Cards';
import  Sdata from './Sdata';


const Work =(props)=>{
    
      return (
          <>
          
          <section class="work">
        <div class="container">
            <h1 class="section_heading"><span>Our</span> Work</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deserunt?
            </p>
            <div class="card_wrapper">
                <div class="card">
                    <div class="over_lay">
                        <span> Category</span>
                        <a href="#">Web Development</a>
                    </div>
                    <img src="/images/work_1.jpg" alt=""/>
                </div>
                <div class="card">
                    <div class="over_lay">
                        <span> Category</span>
                        <a href="#">Web Development</a>
                    </div>
                    <img src="/images/work_2.jpg" alt=""/>
                </div>
                <div class="card">
                    <div class="over_lay">
                        <span> Category</span>
                        <a href="#">Web Development</a>
                    </div>
                    <img src="/images/work_3.jpg" alt=""/>
                </div>
                <div class="card">
                    <div class="over_lay">
                        <span> Category</span>
                        <a href="#">Web Development</a>
                    </div>
                    <img src="/images/work_4.jpg" alt=""/>
                </div>
                <div class="card">
                    <div class="over_lay">
                        <span> Category</span>
                        <a href="#">Web Development</a>
                    </div>
                    <img src="/images/work_5.jpg" alt=""/>
                </div>
                <div class="card">
                    <div class="over_lay">
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
