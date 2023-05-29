import React, { useEffect, useState } from 'react';
import imgX from "../../../images/close.png" /*//SHTOJA QITO part 2 */

const Description = ({classNames, hideDesc}) =>{
    return (
        <div className={classNames}>
            <img src={imgX} alt='' onClick={()=>hideDesc("true")}/> {/*//SHTOJA QITO part 2 */}
            <h2>Hello</h2>
        </div>
    )
}


export default Description;