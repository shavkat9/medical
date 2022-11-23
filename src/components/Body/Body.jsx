import React from 'react';
import './Body.css'
import Nurse from '../Form/assets/img/nurse.png'
import Facebuk from '../Form/assets/img/facebuk.png'
import Instag from '../Form/assets/img/instag.png'
import FlyingB from '../Form/assets/img/flyingB.png'
import Doctor from '../Form/assets/img/doctor.png'
import Nurses from '../Form/assets/img/prettier.png'
import NursesDoc from '../Form/assets/img/niceone.png'






const Body = () => {
    return (
        <div className="body__starting">
            <div className="body">
            <span>Team</span>
            <h5>Our Team</h5>
            <p>Problems trying to resolve the conflict between <br /> 
             the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className="body__box">
            <div className="body__items">
                <img className='body__person' src={Nurse} alt="img" />
                <h3>Julian Jameson</h3>
                <p>Profession</p>
                <div className="body__icons">
                    <img src={Facebuk} alt="icon" />
                    <img src={Instag} alt="icon" />
                    <img src={FlyingB} alt="icon" />
                </div>
            </div>
            <div className="body__items">
                <img  className='body__person' src={Doctor} alt="img" />
                <h3>Julian Jameson</h3>
                <p>Profession</p>
                <div className="body__icons">
                    <img src={Facebuk} alt="icon" />
                    <img src={Instag} alt="icon" />
                    <img src={FlyingB} alt="icon" />
                </div>
            </div>
            <div className="body__items">
                <img  className='body__person' src={Nurses} alt="img" />
                <h3>Julian Jameson</h3>
                <p>Profession</p>
                <div className="body__icons">
                    <img src={Facebuk} alt="icon" />
                    <img src={Instag} alt="icon" />
                    <img src={FlyingB} alt="icon" />
                </div>
            </div>
            <div className="body__items">
                <img  className='body__person' src={NursesDoc} alt="img" />
                <h3>Julian Jameson</h3>
                <p>Profession</p>
                <div className="body__icons">
                    <img src={Facebuk} alt="icon" />
                    <img src={Instag} alt="icon" />
                    <img src={FlyingB} alt="icon" />
                </div>
            </div>
        </div>
     </div>
       
    )
}
export default Body;
