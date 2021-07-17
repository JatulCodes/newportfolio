import React from 'react';
import './Portfolio.css';
import './utilities.css';
import Swiper from './Swiper';


class Freelancer extends React.Component {
    render() {
        return (
            <>
                <section class="freelancer">
                    <h1> I Am Available For Freelancer</h1>
                    <p>We provide high standard clean website for your business solution</p>
                    <button class="btn btn-primary"> DOWNLOAD CV</button>
                </section>
                <section class="reviews">
                    <div class="container">
                        <h1 class="section_heading"> <span>Our</span> Clients</h1>
                        <p>We provide high standard clean website for your business solution</p>

                        {
                            <Swiper />
                        }
                    </div>
                </section>
            </>

        )
    }
}
export default Freelancer;

