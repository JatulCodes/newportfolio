import React from 'react';
import './Portfolio.css';
import './utilities.css';


class Footer extends React.Component {
    render() {
        return (

            <>
                <footer>
                    <img class="footer_logo" src="/images/footer_logo.png" alt="" />
                    <div class="footer_social">
                        <a href=""><img src="/images/youtube.png" alt="" /></a>
                        <a href=""><img src="/images/whatsapp.png" alt="" /></a>
                        <a href=""><img src="/images/instagram.png" alt="" /></a>
                        <a href=""><img src="/images/search.png" alt="" /></a>
                        <a href=""><img src="/images/facebook.png" alt="" /></a>
                    </div>
                    <div class="copy_right">
                        Copyright 2020 Name PSD Template. All Right Reserved.
                    </div>
                </footer>

            </>
        )
    }
}

export default Footer;


