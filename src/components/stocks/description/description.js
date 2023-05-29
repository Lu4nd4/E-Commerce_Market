import React, { useEffect, useState } from 'react';
import imgX from "../../../images/close.png" /*//SHTOJA QITO part 2 */

const Description = (props) =>{
    return (
        <div className={props.classNames}>
            <img src={imgX} alt='' onClick={()=>props.hideDesc("true")}/> {/*//SHTOJA QITO part 2 */}
            <h2>{props.description}</h2>
        </div>
    )
}


export default Description;