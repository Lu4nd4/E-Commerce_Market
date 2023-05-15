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
                <div className="footerarrow"><img alt="" src={left}/></div>
                <img alt="hello2" className="ps4" src={ps4}/>
                <img alt="hello2" className="lg" src={LG}/>
                <img alt="hello2" className="samsung" src={samsung}/>
                <img alt="hello2" className="germin" src={garmin}/>
                <img alt="hello2" className="tefal"  src={tefal}/>
                <div className="footerarrow"><img alt="" src={right} /></div>
            </div>
        </div>
    )
}

export default Footer;