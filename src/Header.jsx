import React from 'react';
import './Portfolio.css';
import './utilities.css';


class header extends React.Component {
    render() {
        return (
            <>
            <header>
                <div class="container">
                    <nav class="flex items-center justify-between">
                        <div class="left flex items-center">
                            <div class="branding">
                                <img src="/images/logo_4.png" alt="" />
                            </div>
                            <div>
                                <a href="#">Home</a>
                                <a href="#about">About</a>
                                <a href="#Services">Service</a>
                                <a href="#reviews">Pages</a>
                                <a href="#blog">Blog</a>


                            </div>

                        </div>
                        <div class="right">
                            <button class="btn btn-primary">Contact</button>
                        </div>
                    </nav>
                    <div class="hero flex items-center justify-between">
                        <div class="left flex-1 flex justify-center">
                            <img src="/images/me_img.png" alt="" />
                        </div>
                        <div class="right flex-1">
                            <h6>Jatul kumar</h6>
                            <h1>Full _<span>Stakers</span> </h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, quasi! Esse quo ipsa
                                repellendus nobis cumque quae eius. Impedit voluptates atque in nisi quia sit Lorem ipsum dolor
                                sit amet consectetur adipisicing elit. Alias sed esse fugiat illo ipsam adipisci eligendi
                                aliquid, Assumenda, minus vero. Numquam, id quisquam? Et rem nihil repudiandae assumenda?
                                commodi laboriosam amet, modi cupiditate reprehenderit eum dolor sunt?</p>
                            <div>
                                <button class="btn btn-secondary">DOWNLOAD CV</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            </>
        )
    }
}

export default header;
