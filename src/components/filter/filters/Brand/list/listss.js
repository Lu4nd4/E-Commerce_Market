import React, { useEffect, useState, useContext } from "react";
import {IfClicked} from '../../../filter'

const Listss = ({text, filterAll, setAll}) => {
    const starts = useContext(IfClicked)
    const [ifchecked, setIfchecked] = useState(false)
    useEffect(()=>{
        if(text=="All"){
            setIfchecked(true)

        }else{
            setIfchecked(false)
        }
    }, [starts])
    
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
        <label className="label"> <input className="list" onChange={onChangeHandler} type="checkbox" id="checkbox" onClick={onClickHandler} checked={ifchecked}/>{text}</label>
        </div>
    )
}

export default Listss;