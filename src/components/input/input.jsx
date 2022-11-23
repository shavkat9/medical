import React from "react";
import '../input/input.css'


const Input = () => {
    return (
       <div className="input">
        <h2>Newsletter</h2>
        <strong>JOIN US</strong>
        <p>Problems trying to resolve the conflict between <br /> 
         the two major realms of Classical physics: Newtonian mechanics </p>
         <input className="input__text" type="text" placeholder="Type..." />
         <input className="input__title" type="text" value="Subscribe" />
       </div>
    )
}

export default Input;