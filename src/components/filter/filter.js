
import React, { useState } from "react";
import "./filter.css";
import Brand from "./filters/Brand/brand";
import Color from "./filters/color/color";
import Price from "./filters/price";
import arrow from "../../images/Vector 19.png";

export const IfClicked = React.createContext();

const Filter = () => {
  const [showBlockPrice, setShowBlockP] = useState ("block")
  const [showBlockBrand, setShowBlockB] = useState ("none")
  const [showBlockColor, setShowBlockC] = useState ("none")
  const [color, setClass] = useState ("color radious")
  const [clicked, isclicked] = useState (false)

 
  // const [show, setShow] = useState("none")

  // const showElement = () =>{
  //     if(show === "none") setShow("block")
  //     else setShow("none")
  // }

  const resethandler = () => {
    isclicked(prev => !prev)
  }

  const dropdownHandler = () => {
    setShowBlockP(prevState => {
        if(prevState === "none"){
          setShowBlockP("none")
          setShowBlockB("none")
          setShowBlockC("none")
          return "block"
        }
      else {
        return "none"
      }})
    }    

  const dropdownHandler1 = () => {
    setShowBlockP(prevState => {
        if(prevState === "none"){
          setShowBlockB("none")
          setShowBlockC("none")
          return "block"
        }
      else {
        return "none"
      }})
    }    

    const dropdownHandler2 = () => {
    setShowBlockB(prevState => {
      if(prevState === "none"){
        setShowBlockP("none")
        setShowBlockC("none")
        return "block"}
      else {
        return "none"}})


      }
    const dropdownHandler3 = () => {
    setShowBlockC(prevState => {
      if(prevState === "none"){
        setClass("color")
        setShowBlockB("none")
        setShowBlockP("none")
        return "block"
      }
      else{
        setClass("color radious") 
         return "none"
        }})   
}

  return (
    <div >
        
          <div className="filter row">
          <h3 onClick={dropdownHandler}>FILTERS: </h3>
            <button onClick={resethandler}>Reset</button>
          </div>
          <div className="filters">
            <IfClicked.Provider value={clicked}>
              <Price onClick={dropdownHandler1} block={showBlockPrice} />
              <Brand onClick={dropdownHandler2} block={showBlockBrand} />
              <Color onClick={dropdownHandler3} theColor={color} block={showBlockColor} />
            </IfClicked.Provider>
          </div>
        
    
    </div>
  );
};

export default Filter;
