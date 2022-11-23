import React from 'react'
import './footer.css'
import Mobile from '../Form/assets/img/mobi.png'
import Map from '../Form/assets/img/maps.png'
import Messege from '../Form/assets/img/messeges.png'
import NetConTent from '../Form/assets/img/netcontent.png'
import Net from '../Form/assets/img/net.png'
import Netinsta from '../Form/assets/img/netinsta.png'
import Netbird from '../Form/assets/img/netBird.png'
// import Textss from '../Form/assets/img/text.png'
// import Facebok from '../Form/assets/img/facebuk.png'
// import Instagr from '../Form/assets/img/instag.png'
// import FlyingBirds from '../Form/assets/img/flyingB.png'

const Footerl = () => {
    return (
      <footer>
        <div className="footer__content">
            <ul>
                <li className='footer__nav'><a href="#">Company Name</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">We are hiring</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            <div className="footer__contact">
                <ul>
                    <li className='footer__nav'><a href="#">Legal</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Carrier</a></li>
                    <li><a href="#">We are hiring</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div className="footer__section">
                <ul>
                    <li  className='footer__nav'><a href="#">Feature</a></li>
                    <li><a href="#">Business Marketing</a></li>
                    <li><a href="#">User Analytic</a></li>
                    <li><a href="#">Live Chat</a></li>
                    <li><a href="#">Unlimited Support</a></li>
                </ul>
            </div>
            <div className="footer__source">
                <ul>
                    <li  className='footer__nav'><a href="#">Resources</a></li>
                    <li><a href="#">IOS & Android</a></li>
                    <li><a href="#">Watch & Demo</a></li>
                    <li><a href="#">Customers</a></li>
                    <li><a href="#">API</a></li>
                </ul>
            </div>
            <div className="footer__contact">
                <ul>
                    <li  className='footer__nav'><a href="#">Get in Touch</a></li>
                    <li><a href="#">(4890) 999-0105</a></li>
                    <li><a href="#">A517 Washington Art, Manchester, <br /> Kentucky 39495 </a></li>
                    <li><a href="#">debra.hoit@example.com </a></li>
                </ul>
            </div>
        </div>
        <img className='footer__mobi' src={Mobile} alt="vector" />
        <img  className='footer__map' src={Map} alt="vector" />
        <img  className='footer__con' src={Messege} alt="vector" />
        <div className="footer__blog">
            <span>Made With Love By Figmaland All Right Reserved </span>
           <div className="footer__down">
             <img src={Net} alt="vector" />
            <img src={Netinsta} alt="vector" />
            <img src={Netbird} alt="vector" />
           </div>

        </div>
      </footer>
    )
}

export default Footerl;