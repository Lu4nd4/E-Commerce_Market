import React from "react";
import imgX from "../../../../images/x.png"

const Lists2 = ({change})=>{
    return(
        <div className="list2">
            <img src={imgX}/>
            <span>{change.divColor}</span>
        </div>
    )
}

export default Lists2;