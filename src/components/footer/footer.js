import React from "react";
import './footer.css'
import '../../App.css';
import LG from "../../images/image 36.png";
import sony from "../../images/sonyicon.jpg";
import asus from "../../images/asusicon.jpg";
import samsung from "../../images/image 34.png";
import apple from "../../images/appleicon.png";

const Footer = () =>{
    return(
        <div className="row footer">
            
            <div className="col-12 row footerlogos">
                <img alt="hello2" className="apple" src={apple}/>
                <img alt="hello2" className="lg" src={LG}/>
                <img alt="hello2" className="samsung" src={samsung}/>
                <img alt="hello2" className="sony" src={sony}/>
                <img alt="hello2" className="asus"  src={asus}/>
                
            </div>
        </div>
    )
}

export default Footer;