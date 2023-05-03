import React, { useState, useContext, useEffect } from "react";
import './../../../../App.css'
import checkkwhite from '../../../../images/check.png'
import checkkblack from '../../../../images/check (1).png'
import {IfClicked} from '../../filter'

const DivColors = ({change, onDone}) => {
    const starts = useContext(IfClicked)
    const [image, setimage] = useState(checkkwhite)
    const [show, setShow] = useState("none")
    const [select, setSelect] = useState(false)

    useEffect(()=>{
        setShow("none")
        setSelect(false)
    }, [starts])

    const imageHandler = () =>{
        
        setShow(prevState => {
            if(prevState === "none"){
                setSelect(true)
                if(typeof onDone === "function"){
                    onDone(change.id, select);
                }
               return "block" 
            }
            else { 
                setSelect(false)
                if(typeof onDone === "function"){
                    onDone(change.id, select);
                }
                return "none"
            }
        }) 
        setimage(()=>{
            if(change.divColor =="White" || ( change.divColor=="Yellow")){
                return checkkblack
            }else return checkkwhite
        })
    }
    return (
        <div>
            <div onClick={imageHandler} className={change.class} style={{backgroundColor: change.divColor, borderColor: change.border}}>
                <img src={image} style={{display: show }}/>
            </div>
        </div>
    )
}

export default DivColors;
