import React from "react";
import '../main/main.css'
import vector from "../../assets/img/@none.png"
import lady from '../../assets/img/medlady.png'

const Main = () => {
    return(
        <main>
            <div className="main__intro">
                <img className="main__img" src={lady} alt="png"/>
            <div className="main__content">
                <hr className="main__hr" />
                <h2 className="main__text" >Meet Our Experts</h2>
                <p className="main__para" >Problems trying to resolve the conflict between <br />
                 the two major realms of Classical physics: <br />
                 Newtonian mechanics </p>
                 <button className="main__btn" >Learn More</button>
                 <img className="main__icon__vec" src={vector} alt="png" />
            </div>

            </div>
        </main>

    )
}
export default Main;