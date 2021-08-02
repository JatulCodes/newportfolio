import React from 'react';
import './Portfolio.css';
import './utilities.css';

class About extends React.Component {
    render() {
        return (
            <>
            <section id="about" className="about">
                <div className="container flex items-center">
                    <div className="flex-1">
                        <img className="about_me_img" src="/images/fish_left_1.jpg" alt="" />
                    </div>
                    <div className="flex-1">
                        <h1>About <span>me</span> </h1>
                        <h3>Hello i'm Jatul</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptate, Lorem ipsum dolor sit,
                            amet consectetur adipisicing elit. Vitae eum tempore rem architecto officiis ipsum quos dolor animi
                            quod natus neque labore dolores voluptatibus distinctio, sunt itaque error excepturi illum quas unde
                            corporis id? non aut laudantium pariatur corrupti temporibus obcaecati excepturi molestiae itaque
                            laboriosam.</p>
                        <div className="social_icons">
                            <a href="#"><img src="/images/whatsapp.png" alt="" /></a>
                            <a href="#"><img src="/images/youtube.png" alt="" /></a>
                            <a href="#"><img src="/images/search.png" alt="" /></a>
                            <a href="#"><img src="/images/instagram.png" alt="" /></a>
                            <a href="#"><img src="/images/facebook.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>
            </>

        )
    }
}
export default About;


