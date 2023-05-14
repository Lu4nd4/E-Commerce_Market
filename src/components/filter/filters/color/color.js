import React, { useEffect, useState, useContext } from "react";
import './../filterss.css'
import '../../../../App.css'
import smallarrow from "../../../../images/Group (3).png"
import DivColors from "./divColors";
import Lists2 from "./lists2";
import {IfClicked} from '../../filter'

const Color = ({block, theColor , onClick }) => {
    const starts = useContext(IfClicked)
    const [changeColor, setchangeColor] = useState([
        {id: 1, divColor: "Black", border: "black", selected: false, class: "black myColor"},
        {id: 2, divColor: "Red" , border: "red", selected: false, class: "red myColor"} ,
        {id: 3, divColor: "Blue" , border: "blue", selected: false, class: "blue myColor"},
        {id: 4, divColor: "Lightgreen" , border: "lightgreen", selected: false, class: "lightgreen myColor"},
        {id: 5, divColor: "Yellow" , border: "yellow", selected: false, class: "yellow myColor"},
        {id: 6, divColor: "Orange" , border: "orange", selected: false, class: "orange myColor"},
        {id: 7, divColor: "Grey" , border: "grey", selected: false, class: "grey myColor"},
        {id: 8, divColor: "White" , border: "lightgrey", selected: false, class: "white myColor"},
        
    ])
    const [checked, setChecked] = useState ([])
    const [ifSelected, setifSelected] = useState ("none")
    const [mymargin, setMargin] = useState ("140px")

    
    useEffect(()=>{
        setifSelected("none")
        setChecked([])
    }, [starts])

    const handleTask = (id, select) =>{
        setChecked((prevstate)=> [ ...prevstate.filter(element => {
            return element.id !== id 
        }) ,
         ...changeColor.filter(color =>{ return color.id ==id && color.selected == select})]    
     )}
     
    useEffect(()=>{
        if(checked.length !== 0){
            setifSelected("block")
            setMargin("10px")
        }else{
            setifSelected("none")
            setMargin("140px")
        }
        
    },[checked])

    return (
        <div>
            <p className={theColor} onClick={onClick}>Color <span><img src={smallarrow} width= "10px" height= "5px "/></span></p>
            
            <div style={{display: block, paddingBottom: mymargin}}>
            {changeColor.map(color=> <DivColors key={color.id} change={color} onDone = {handleTask}/>) }
            <div className="selecteddiv" style={{display: ifSelected}}>
                <h3>Selected Colors</h3>
                {checked.map(color=> <Lists2 key={color.id} change={color} />) }
            </div>
            </div>
            
        </div>
    )
}

export default Color;