import React, { useState } from "react";
import './description.css';
import product from "../../../images/iphone12purple.png";
import heart from "../../../images/heart.png";
import stock from "../../../images/checked.png";

const Description = () => {

    const [value, setValue] = useState(0);

    const handleMinusClick = () => {
        setValue((prevValue) => prevValue - 1);
      };
    
      const handlePlusClick = () => {
        setValue((prevValue) => prevValue + 1);
      };
    

    return(
        <div className="desc">
            <img className="col-5" src={product} alt="product"></img>
            <div className="col-4 description">
                <h2>SAMSUNG QLED QE55Q90R BRR12M001WWEG</h2>
                <h3>MKD <span>2,000.00</span></h3>
                <h3>By <a>iPhone</a></h3>
                <hr></hr>

                <img src={stock} className="instock" alt=""></img><span id="spanstock">In stock: 10</span>
                
                <p>COLOR: <span id="color">BROWN</span></p>

                <p>Lorem ipsum dolorrcdtfvgbhjrxcdtfvgybhjnftg xrdctfvgbhxdcftvgybhne5drfgbh s4d5cfvygbuhnjimxdctfvygbh xcvgybhunjde5f6gbhunij xcdtfvgybhunctfvygbuhnk m cvfgybhunjkmj</p>


                <div className="threediv">
                    <div className="input-with-buttons">
                    <button id="minus" className="minus-button" onClick={handleMinusClick}>-</button>
                    <input type="number" value={value} id="input" readOnly />
                    <button id="plus" className="plus-button" onClick={handlePlusClick}>+</button>
                    </div>

                    <p className="addtc">ADD TO CART</p>

                    <img src={heart} className="bluheart"></img>
                </div>
                

            </div>

        </div>
    )
}

export default Description;