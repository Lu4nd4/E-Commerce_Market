import React, { useEffect, useState, useContext } from "react";
import {IfClicked} from '../../../filter'

const Listss = (props) => {
    const starts = useContext(IfClicked)
    const [ifchecked, setIfchecked] = useState(false)

    useEffect(()=>{
        if(props.text ==="All"){
            setIfchecked(true)

        }else{
            setIfchecked(false)
        }
    }, [starts, props.text])
    
    const onChangeHandler = () =>{
        // if(text=="All" && ifchecked == true){
        //     if(typeof filterAll === "function"){
        //         filterAll(true, false);
        //     }
        // }else if(text !=="All" && ifchecked == true) {
        //     if(typeof filterAll === "function"){
        //         filterAll(false, true);
        //     }
        // }
    }
    const onClickHandler = () =>{
        setIfchecked(p => !p)
    }
    
    return (
        <div>
        <label className="label"> <input className="list" onChange={onChangeHandler} type="checkbox" id="checkbox" onClick={onClickHandler} checked={ifchecked}/>{props.text}</label>
        </div>
    )
}

export default Listss;