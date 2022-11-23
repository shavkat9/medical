import React from "react";
import './Mainintro.css';
import injection from '../../assets/img/injection.png'
import bed from '../../assets/img/vectors.png'
import hert from '../../assets/img/hert.png'
import eye from '../../assets/img/eye.png'
import vecto from '../../assets/img/vecto.png'
import cool from '../../assets/img/cool.png'
import vec from '../../assets/img/@none.png'
import Vaew from '../../assets/img/Vaew.png'
import Bedss from '../../assets/img/bedss.png'
import cover from '../../assets/img/cover.png'

const MainIntro = () => {
return (
    <div className="intro__section">
        <div className="intro__content">
        <span className="intro__span" >Practice Advice</span>
        <h4 className="intro__title">The Best Reference</h4>
        <p className="intro__para" >Problems trying to resolve the conflict between <br />
         the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
         <div className="intro__offers">
            <div className="intro__box"> 
            <div className="intro__offer">
                <img  className="intro__png" src={injection} alt="png" />
                {/* <img className="intro__icon" src={bed} alt="icon" />
                <img className="intro__icons" src={hert} alt="icon" />
                <img className="intro__vectors" src={eye} alt="icon" /> */}
            </div>
            <div className="intro__section">
                <h3>Painless procedures</h3>
                <strong>Quick examination</strong>
                <p>We focus on ergonomics and <br />
                 meeting you where you work. It's <br />
                 only a keystroke away.</p>
                 <img src={vecto} alt="png" />
                 <strong>15 Sales</strong> <br />
                 <i>$16.48 <span>$6.48</span></i>
                 <div className="intro__lines">
                <div className="intro__info">
                  <img className="intro__font" src={cool} alt="icon" />
                  <p  className="intro__boxes">22h...</p>
                  <img className="intro__image"  src={Vaew} alt="icon" />
                  <p className="intro__upper">64 Lessons</p>
                  <img className="intro__time" src={Bedss} alt="icon" />
                  <p className="intro__fox" >Progress</p>
               </div>
            <button className="intro__button">Learn More</button>
            <img className="intro__veco" src={vec} alt="icon" />
            </div>
            </div>
            </div>
            <div className="intro">
            <div className="intro__offer">
                <img  className="intro__png"  src={cover} alt="png" />
                {/* <img className="intro__icon"  src={bed} alt="icon" />
                <img className="intro__icons"  src={hert} alt="icon" />
                <img className="intro__vectors" src={eye} alt="icon" /> */}
            </div>
            <div className="intro__section">
                <h3>Painless procedures</h3>
                <strong>Quick examination</strong>
                <p>We focus on ergonomics and <br />
                 meeting you where you work. It's <br />
                 only a keystroke away.</p>
                 <img src={vecto} alt="png" />
                 <strong>15 Sales</strong> <br />
                 <i>$16.48 <span>$6.48</span></i>
                 <div className="intro__lines">
                <div className="intro__info">
                  <img className="intro__font" src={cool} alt="icon" />
                  <p className="intro__boxes" >22h...</p>
                  <img className="intro__image" src={Vaew} alt="icon" />
                  <p className="intro__upper">64 Lessons</p>
                  <img  className="intro__time"  src={Bedss} alt="icon" />
                  <p className="intro__fox" >Progress</p>
               </div>
            <button className="intro__button">Learn More</button>
            <img className="intro__veco" src={vec} alt="icon" />
            </div>
            </div>
            
            </div>
         </div>
    </div>
)
}

export default MainIntro;