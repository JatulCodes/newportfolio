import React from 'react';
import './Portfolio.css';
import './utilities.css';



class Blogg extends React.Component{
    render(){
        return(

            <>
                <section className="blog">
        <div className="container">
            <h1 className="section_heading"> <span>Our</span>  blog</h1>
            <p>We provide high standard clean website for your business</p>
            <div className="card_wrapper">
                <div className="card">
                    <div className="img_wrapper">
                        <img src="/images/ourwork_1.jpg" alt="iamge"/>
                    </div>
                    <div className="card_content"> 
                        <a href="#">
                            <h1>Lorem ipsum dolor sit amet consectetu</h1>  
                        </a>
                        <span> Jan 28, 2021 </span>
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, ullam tempora quod magni doloribus, minus molestias, nobis est perspiciatis totam illum.</p>
                        <a className="read_more" href="#">Read more</a>
                    </div>
                </div>
                <div className="card">
                    <div className="img_wrapper">
                        <img src="/images/ourwork_2.jpg" alt="iamge"/>
                    </div>
                    <div className="card_content"> 
                        <a href="#">
                            <h1>Lorem ipsum dolor sit amet consectetu</h1>  
                        </a>
                        <span> Jan 28, 2021 </span>
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, ullam tempora quod magni doloribus, minus molestias, nobis est perspiciatis totam illum.</p>
                        <a href="#">Read more</a>
                    </div>
                </div>
                <div className="card">
                    <div class="img_wrapper">
                        <img src="/images/ourwork_3.jpg" alt="iamge"/>
                    </div>
                    <div className="card_content"> 
                        <a href="#">
                            <h1>Lorem ipsum dolor sit amet consectetu</h1>  
                        </a>
                        <span> Jan 28, 2021 </span>
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, ullam tempora quod magni doloribus, minus molestias, nobis est perspiciatis totam illum.</p>
                        <a href="#">Read more</a>
                    </div>
                </div>
            </div>
        </div>

    </section>

            </>
        )
    }
}

export default Blogg;



