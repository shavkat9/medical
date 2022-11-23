import React from "react";
import './Form.css'
import Man from "./assets/img/man.png"
import Star from "./assets/img/menStar.png"
import Stars from "./assets/img/manStarHAlf.png"
import Starline from "./assets/img/men.png"

const Form = () => {
    return (
        <div className="form__main">
          <div className="form">
            <span>Testimonials</span>
            <h2>See Our Impressions</h2>
            <p>Problems trying to resolve the conflict between <br />
             the two major realms of Classical physics: Newtonian mechanics </p>
           </div>
           <div className="form__start">
            <div className="form__middle">
            <img className="form__man" src={Man} alt="png" />
                <p className="form__content">Slate helps you see how many more days <br /> you need to work to reach 
                    your financial <br /> goal for the month and year
                </p>
                <div className="form__stars">
                    <div className="form__star">
                        <img src={Star} alt="icon"/>
                        <img src={Star} alt="icon"/>
                        <img src={Star} alt="icon"/>
                        <img src={Star} alt="icon"/>
                        <img src={Stars} alt="icon"/>
                    </div>
                
                <h4>Regina Miles</h4>
                <p className="form__para">Designer</p>
             </div>
             </div>
             <div className="form__box">
             <div className="form__middle">
            <img className="form__man" src={Starline} alt="png" />
                <p className="form__content">Slate helps you see how many more days <br /> you need to work to reach 
                    your financial <br /> goal for the month and year
                </p>
                <div className="form__stars">
                    <div className="form__star">
                        <img src={Star} alt="icon"/>
                        <img src={Star} alt="icon"/>
                        <img src={Star} alt="icon"/>
                        <img src={Star} alt="icon"/>
                        <img src={Stars} alt="icon"/>
                    </div>
                    <h4>Regina Miles</h4>
                   <p className="form__para" >Designer</p>
                </div>
             </div>
           </div>
        </div>
     </div>
        
        
        
    )
}
export default Form;