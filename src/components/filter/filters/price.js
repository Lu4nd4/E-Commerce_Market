import React, { useContext, useEffect, useState } from "react";
import './filterss.css'
import smallarrow from "../../../images/Group (3).png"
import circle1 from "../../../images/Ellipse 40.png"
import rectangle from "../../../images/Rectangle 569.png"
import circle2 from "../../../images/Ellipse 41.png"
import {IfClicked} from '../filter'
import { variables } from "../../../Variables";

const Price = ({block, onClick}) => {
    
    const starts = useContext(IfClicked)
    const [end, setEnd] = useState(300000)
    const [img2, setWidth] = useState(220)
    const [img3, setWidth2] = useState(220)
    useEffect(()=>{
        setEnd(300000)
        setWidth(220)
        setWidth2(220)
    }, [starts])

    function handleDrag(e) {
        setWidth(prevState => {
            if(prevState > 221)
            return 220
            else
            return e.clientX - 80
        } )
        setWidth2(prevState => {
            if(prevState > 221)
            return 220
            else
            return img2
        } )
    }

    useEffect(()=>{
        let percentage = img2 / 220;
        setEnd((percentage * 300000).toFixed())
        
    },[img2])




    return (
        <div>
            <p className="price" onClick={onClick}>Price <span><img alt="img4" src={smallarrow} width= "10px" height= "5px "/></span></p>


            <div className="dropdown1" style={{display: block}}>
                <p>Price Range Selected</p>
                <p>MKD 1,000 - MKD {end}</p>

                <div className="pricerange row">
                    <img alt="Hello"  src={circle1} width= "20px" height= "20px" className="imgrange1"/>
                    <img alt="Hello"  src={rectangle} style= {{width: `${img2}px`}} height= "4px" className="imgrange2"/>
                    <img  alt="Hello" src={circle2} draggable onDrag={handleDrag} style= {{marginLeft: `${img3}px`}} width= "20px" height= "20px" className="imgrange3"/>
                </div>
            </div>
        </div>
    )
}

export default Price;