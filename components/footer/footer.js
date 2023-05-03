import React from "react";
import './footer.css'
import '../../App.css';
import ps4 from "../../images/image 35.png";
import LG from "../../images/image 36.png";
import garmin from "../../images/image 37.png";
import tefal from "../../images/image 39.png";
import samsung from "../../images/image 34.png";
import right from "../../images/chevron-right (1).png";
import left from "../../images/chevron-right.png";

const Footer = () =>{
    return(
        <div className="row footer">
            <div className="col-3 bluepart">
                <h3>MORE THAN 100 BRANDS</h3>
            </div>
            <div className="col-9 row footerlogos">
                <div className="footerarrow"><img src={left}/></div>
                <img className="ps4" src={ps4}/>
                <img className="lg" src={LG}/>
                <img className="samsung" src={samsung}/>
                <img className="germin" src={garmin}/>
                <img className="tefal"  src={tefal}/>
                <div className="footerarrow"><img src={right} /></div>
            </div>
        </div>
    )
}

export default Footer;