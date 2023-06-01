import React, { useEffect, useState } from "react";
import './description.css';
import "../../../App.css"
import heart from "../../../images/heart.png";
import imgX from "../../../images/close.png" /*//SHTOJA QITO part 2 */
import stock from "../../../images/checked.png";
import { Link, useParams } from 'react-router-dom';
import { variables } from "../../../Variables";



const Description = () => {
  const {id} = useParams();
    //backend
    const [product, setProduct] = useState([]);
    
    
    const refreshList = () => {
      fetch(variables.API_URL + 'FilterProducts/'+ id)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
      });
    };
    useEffect(() => {
      refreshList();
    }, []);
    
    
    const [value, setValue] = useState(0);
    
    const handleMinusClick = () => {
      setValue((prevValue) => prevValue - 1);
    };
    
    const handlePlusClick = () => {
      setValue((prevValue) => prevValue + 1);
    };
    return(
        <div className="desc"> 
        {product.map((item) => (
            <div  key={item.ProductID}>
              <Link to="/Stocks">
                <img className="removeX" src={imgX} alt="" />
              </Link>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="300"
                  height="200"
                  fill="currentColor"
                  className="bi bi-image-fill monitor"
                  viewBox="0 0 16 16"
                >
                  <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                </svg>
              </div>

              <div className="col-4 description">
                <h2>{item.ProductName}</h2>
                <h3>
                  MKD <span>{item.Price}</span>
                </h3>
                <h3>
                  By <a>{item.Brand}</a>
                </h3>
                <hr></hr>

                <img src={stock} className="instock" alt=""></img>
                <span id="spanstock">In stock: {item.Stock}</span>

                <p>
                  COLOR: <span id="color">BROWN</span>
                </p>

                <p>{item.Description}</p>

                <div className="threediv">
                  <div className="input-with-buttons">
                    <button
                      id="minus"
                      className="minus-button"
                      onClick={handleMinusClick}
                    >
                      -
                    </button>
                    <input type="number" value={value} id="input" readOnly />
                    <button
                      id="plus"
                      className="plus-button"
                      onClick={handlePlusClick}
                    >
                      +
                    </button>
                  </div>

                  <p className="addtc">ADD TO CART</p>

                  <img src={heart} className="bluheart"></img>
                </div>
                 <button className="payment">PROCEED TO PAYMENT</button>
              </div>
            </div>))}
        
            

        </div>
    )
}

export default Description;