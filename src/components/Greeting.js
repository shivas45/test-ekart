import React from "react";
import "./Card.css";
function Greeting({ content}) {
    return (
        <>
        <div className="pWrapper">
         <p>
             {content} 
        </p>

        <p className="price">$3.99</p>
        <br/>
        </div>
        <button className = "btn">Buy +</button>
            
        </>
    );
}

export default Greeting;