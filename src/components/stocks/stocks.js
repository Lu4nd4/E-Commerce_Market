import React, { useState, useEffect} from "react";
import "./stocks.css";
import '../../App.css';
import SamsungQled from "../../images/image 10.png";
import lock2 from "../../images/lock2.png";
import arrows from "../../images/arrows.png";
import heart from "../../images/heart 1.png";
import star from "../../images/star.png";
import redHeart from "../../images/reheart.png";
import noFillstar from "../../images/emptystar.png";
import { variables } from "../../Variables";


const Stocks = (props) => { //SHTOJA QITO {/*//SHTOJA QITO part 2 */}
    //Backend

    const splitArray = props.description.split(',');
    const firstThreeItems = splitArray.slice(0, 3);
    
    
    
    const [theheart, setheart] = useState(heart)
    const [star1, setstar1] = useState(noFillstar)
    const [star2, setstar2] = useState(noFillstar)
    const [star3, setstar3] = useState(noFillstar)
    const [star4, setstar4] = useState(noFillstar)
    const [star5, setstar5] = useState(noFillstar)
    const [counts, setCount] = useState(0)
    const [element, setElement] = useState('none')
    const [element1, setElement1] = useState('none')
    const [starss, setStarss] = useState(4.5)
    const [reviews, setReviews] = useState(10)
    const [hideStock, setHideStock] = useState("block")//SHTOJA QITO

    const addToChart = () =>{
        if(element1 === "none")
        setElement1("block")
        else setElement1("none")
    }

    const likeOnClickHandler =()=>{

        
        if(element === "none" && theheart === heart){
            setheart(redHeart)
        }else if(element === "none" && theheart === redHeart  && star1 !== noFillstar){
            setheart(heart)
            setstar1(noFillstar); 
            setstar2(noFillstar);
            setstar3(noFillstar)
            setstar4(noFillstar)
            setstar5(noFillstar)
            setReviews(prev =>{ return prev-1})
            setStarss(4.5)
        }else if(element === "block" && theheart === redHeart){
            setElement("none")
        }

        
    }
    const reviewsOnClickHandler= () =>{
        if(element === "none" && theheart === redHeart){
            setElement("block")
        }
        else if(element === "none" && theheart === redHeart){
            setElement("none")
        }
    }


    const handleEnter1 = () =>{
        if(star1 === noFillstar){
            setstar1(star)
            setReviews(prev =>{ return prev+1})
            setStarss(prev => {return (prev + (1/reviews)).toFixed(1)})
        }else if(star1 === star && star2 === star){
            setstar2(noFillstar);
            setstar3(noFillstar)
            setstar4(noFillstar)
            setstar5(noFillstar)
        }else{
            setReviews(prev =>{ return prev+1})
            setStarss(prev => {return (prev + (1/reviews)).toFixed(1)})
            setstar1(noFillstar)
        }
        
    };
    const handleEnter2 = () =>{
        if(star2 === noFillstar){
            setstar1(star); 
            setstar2(star)
            setReviews(prev =>{ return prev+1})
            setStarss(prev => {return (prev + (2/reviews)).toFixed(1)})
        }else if(star2 === star && star3 === star){
            setStarss((4.5 + (2/reviews)).toFixed(1))
            setstar3(noFillstar)
            setstar4(noFillstar)
            setstar5(noFillstar)
        }
    };
    const handleEnter3 = () =>{
        if(star3 === noFillstar){
            setstar1(star); 
            setstar2(star);
            setstar3(star)
            setReviews(prev =>{ return prev+1})
            setStarss(prev => {return (prev + (3/reviews)).toFixed(1)})
        }else if(star3 === star && star4 === star){
            setStarss((4.5 + (3/reviews)).toFixed(1))
            setstar4(noFillstar)
            setstar5(noFillstar)
        }else if(star3 === star){
            setReviews(prev =>{ return prev+1})
            setStarss(prev => {return (prev + (3/reviews)).toFixed(1)})
            setstar4(noFillstar)
            setstar5(noFillstar)
        }};
    const handleEnter4 = () =>{
        if(star4 === noFillstar){
            setstar1(star)
            setstar2(star)
            setstar3(star)
            setstar4(star)
            setReviews(prev =>{ return prev+1})
            setStarss(prev => {return (prev + (4/reviews)).toFixed(1)})
        }else if(star4 === star && star5 === star){
            setStarss((4.5 + (4/reviews)).toFixed(1))
            setstar5(noFillstar)
        }}
    const handleEnter5 = () =>{
        if(star5 === noFillstar){
            setstar1(star)
            setstar2(star)
            setstar3(star)
            setstar4(star)
            setstar5(star)
            setReviews(prev =>{ return prev+1})
            setStarss(prev => {return (prev + (5/reviews)).toFixed(1)})
        }}

    
        const countPlus = () =>{
            setCount(prev => {return prev = prev + 1})
        }

        const countMinus = () =>{
            setCount(prev => {
                if(prev === 0) return 0
                else return prev = prev - 1})                               
        }
    useEffect(()=>{
        props.setThecount(counts)
    }, [counts, props.setThecount])

    const showMydescription=()=>{ //SHTOJA QITO
        setHideStock("none")
        props.onClickFunction("showDescription") 
    }

    useEffect(()=>{ //SHTOJA QITO part 2
        if(props.toCloseDesc == "true"){
            setHideStock("block")
            props.onClickFunction("hideDescription") 
        }
    },[props.toCloseDesc])




    return (
      <div
        className="stocks"
        onClick={showMydescription}
        style={{ display: hideStock }}
      >
        {props.children}
        {" "}
        {/*SHTOJA QITO */}
        <div>
          <img alt="" src={SamsungQled} className="monitor" />
        </div>
        <h3>{props.productName}</h3>
        {/* productName={prod.ProductName}
              description={prod.Description}
              price={prod.Price}
              stocks={prod.Stocks}
              category={prod.CategoryID}
              brand={prod.Brand}
              setThecount={setThecount1}
              toCloseDesc={visible2}
              onClickFunction={onClickDescription}> 
              <Description classNames = {visible} hideDesc ={onClickDescription2}/> */}
        <div className="specs row">
          <div className="info col-9">
            <div className="reviews">
              <img alt="" src={star} />
              <span>
                {starss} <span> ({reviews}) Reviews</span>
              </span>
            </div>
            <ul className="ul">
              {firstThreeItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h2>{props.price} MKD</h2>
          </div>
          <div className="likes col-2">
            
            <div className="popUp" style={{ display: element }}>
              <img
                alt=""
                className="star1"
                src={star1}
                onClick={handleEnter1}
              />
              <img
                alt=""
                className="star2"
                src={star2}
                onClick={handleEnter2}
              />
              <img
                alt=""
                className="star3"
                src={star3}
                onClick={handleEnter3}
              />
              <img
                alt=""
                className="star4"
                src={star4}
                onClick={handleEnter4}
              />
              <img
                alt=""
                className="star5"
                src={star5}
                onClick={handleEnter5}
              />
            </div>
            <img
              alt=""
              src={theheart}
              className="theHeart"
              onClick={likeOnClickHandler}
              onDoubleClick={reviewsOnClickHandler}
            />
            <div className="popUp2" style={{ display: element1 }}>
              <div className="minus" onClick={countMinus}>
                -
              </div>
              <div className="count">{counts}</div>
              <div className="plus" onClick={countPlus}>
                +
              </div>
            </div>
            <img alt="" className="theLock" src={lock2} onClick={addToChart} />
          </div>
        </div>
      </div>
    );
}

export default Stocks;
