import React, { useEffect, useState } from "react";
import './description.css';
import "../../../App.css"
import heart from "../../../images/heart.png";
import imgX from "../../../images/close.png" /*//SHTOJA QITO part 2 */
import stock from "../../../images/checked.png";

const Description = (props) => {

    const [value, setValue] = useState(0);

    const handleMinusClick = () => {
        setValue((prevValue) => prevValue - 1);
      };
    
      const handlePlusClick = () => {
        setValue((prevValue) => prevValue + 1);
      };
    

    return(
        <div className={props.classNames}>
          <img className="removeX" src={imgX} alt='' onClick={()=>props.hideDesc("true")}/> {/*//SHTOJA QITO part 2 */}
            <img className="col-5" src={props.imageSource2} alt="product"></img>

            <div className="col-4 description">
                <h2>{props.productName}</h2>
                <h3>MKD <span>2,000.00</span></h3>
                <h3>By <a>{props.brand}</a></h3>
                <hr></hr>

                <img src={stock} className="instock" alt=""></img><span id="spanstock">In stock: {props.stocks}</span>
                
                <p>COLOR: <span id="color">BROWN</span></p>

                <p>{props.description}</p>

                <div className="threediv">
                    <div className="input-with-buttons">
                    <button id="minus" className="minus-button" onClick={handleMinusClick}>-</button>
                    <input type="number" value={value} id="input" readOnly />
                    <button id="plus" className="plus-button" onClick={handlePlusClick}>+</button>
                    </div>

                    <button className="addtc">ADD TO CART</button>

                    <img src={heart} className="bluheart"></img>

                    
                </div>
                
                <button className="payment">PROCEED TO PAYMENT</button>
                

            </div>


        </div>
    )
}

export default Description;