import React from "react";
import './maincontainer.css';


const MainContainer = (props) =>{
    
    return (
    <div>
        <div style={{position:"sticky", top: 0}}>{props.navbar}</div>

        <div className="mainContainer row">
        <h1>  NANOTX, <br></br>The smart choice. </h1>
        </div>
    </div>
    )
}

export default MainContainer;