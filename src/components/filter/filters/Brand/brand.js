import React, { useState} from "react";
import './../filterss.css'
import smallarrow from "../../../../images/Group (3).png"
import Listss from "./list/listss";

const Brand = ({block, onClick}) => {
    const [trueAll, setTrueAll] = useState(false)
    const [falseAll, setFalseAll] = useState(false)
    const filterAllHandler= (ch, ch2) =>{
        if(ch2)
        setTrueAll(ch)
        if(ch)
        setFalseAll(ch2)
    }
    
    return (
        <div>
            <p className="brand" onClick={onClick}>Brand <span><img alt="" src={smallarrow} width= "10px" height= "5px "/></span></p>
            
            <div className="dropdown1 lists" style={{display: block}}>
                    <Listss text="All" filterAll={filterAllHandler} setAll={trueAll}/>
                    <Listss text="Apple" filterAll={filterAllHandler} setAll={falseAll}/>
                    <Listss text="Samsung" filterAll={filterAllHandler} setAll={falseAll}/>
                    <Listss text="LG" filterAll={filterAllHandler} setAll={falseAll}/>
                    <Listss text="Asus" filterAll={filterAllHandler} setAll={falseAll}/>
                    <Listss text="Sony" filterAll={filterAllHandler} setAll={falseAll}/>
                    {/* <Listss text="Samsung" filterAll={filterAllHandler} setAll={falseAll}/>
                    <Listss text="Sharp" filterAll={filterAllHandler} setAll={falseAll}/>
                    <Listss text="Sony" filterAll={filterAllHandler} setAll={falseAll}/>
                    <Listss text="Tcl" filterAll={filterAllHandler} setAll={falseAll}/>
                    <Listss text="Thomson" filterAll={filterAllHandler} setAll={falseAll}/> */}
            </div>
        </div>
    )
}

export default Brand;