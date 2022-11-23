import React from "react";
import './Section.css'
import heart from "../../assets/img/heart.png"
import none from "../../assets/img/@none.png"
import medicine from "../../assets/img/heartnext.png"

const Section = () => {
  return(
    <section>
        <div className="section">
            <div className="section__line"></div>
            <div className="section__text">Our Activity</div>
            <div className="section__para">Problems trying to resolve the conflict between <br /> 
            the two major realms of Classical physics: <br /> 
            Newtonian mechanics 
           </div>
            <button className="section__button" >Learn More</button>
            <img className="section__icon" src={none} alt="png" />
        </div>
        <div className="section__offer">
            <div className="section__main">
            <img className="section__png__into" src={heart} alt="png" />
            <h3>Book now</h3>
            <hr  />
        
            <p>The gradual <br />
             accumulation of <br />
             information about </p>
             </div>
             <div className="section__title">
             <img className="section__png" src={medicine} alt="png" />
            <h3>Health Queries</h3>
            <hr />
           
            <p>The gradual <br />
             accumulation of <br />
             information about </p>
            
            </div>
           
        </div>
    </section>
  )
}
export default Section