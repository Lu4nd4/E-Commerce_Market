import './nav.css'
import React, { useState, useEffect, useLayoutEffect, useRef  } from 'react';
import lock from "../../images/Group.png";
import profile from "../../images/Group 29.png";
import arrow from "../../images/Vector 19.png";
import cart from "../../images/Ellipse 24.png";
import { gsap } from "gsap";
import Login from './loginPage/login';

const Nav = ({thecount}) => {

    // const nav = useRef();

    // useLayoutEffect(() => {
    //     let ctx = gsap.context(() => {
    //       gsap.to(".navbar", {width: "80%", height: "80%"})
    //     }, nav);
        
    //     return () => ctx.revert();
    //   }, []);
    const [selected, setSelected] = useState("AL")
    const [show, setShow] = useState("none")
    const [Showcart, setShowcart] = useState("none")
    const [login, setLogin] = useState("none")
    const [loginform, setLoginform] = useState("none")
    const [account1, setSetAccount1] = useState("block")
    const [account, setSetAccount] = useState("none")
    const [handleAcc, setHandleAccount] = useState("Log In")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const showElement = () =>{
        if(show == "none") setShow("block")
        else setShow("none")
    }
    const loginForm = () =>{
        
        
        if(loginform == "none"){
            if(handleAcc=="Log In"){
                setHandleAccount("Log Out")
                setLoginform("none")
                setLogin("none")
                setLoginform("block")
                setSetAccount("block")
                setSetAccount1("none")
            }else{
                setSetAccount("Not logged in")
                setHandleAccount("Log In")
                setSetAccount("none")
                setSetAccount1("block")
            }
            
           
        } else {
            setLoginform("none")
        }
    }
    const loginHandler = () =>{
        if(login == "none"){
          setLogin("block")  
        } 
        else setLogin("none")
    }
    useEffect( () =>{
        if(thecount > 0) setShowcart("block")
        else setShowcart("none")
    },[thecount])

    return (
        <div className='navbar row'>
            <div style={{display: loginform}} className="form">
                <Login submits={setLoginform} name={setName} surname={setSurname} setB={setSetAccount} setA={setSetAccount1} setbutton={setHandleAccount}/>
            </div>
            <h1 className='col-2'>Logo Here</h1>
            <div className='col-6'>
                <input className='search'  placeholder='Search Here...' />
            </div>
            <div className=' icons row'>
                <div className='dropdown'>
                    <div style={{display: show}}>
                    <span onClick={() => setSelected("AL")}>AL</span>
                    <span onClick={() => setSelected("MK")}>MK</span>
                    <span onClick={() => setSelected("EN")}>EN</span>
                    </div>
                    <h3 onClick={showElement}>{selected}<img src={arrow} alt='_'/></h3>
                    
                </div>
                <img src={lock} alt='lock' className='lock'/>
                <div><img src={cart} alt='lock' className='cart' style={{display: Showcart}}/>
                <p className='cartp' style={{display: Showcart}}>{thecount}</p></div>
                <img src={profile} alt='profile' onClick={loginHandler}/>
                <div style={{display: login}} className="login">
                    <h5 style={{display: account1}}>Not logged in</h5>
                    <h5 style={{display: account}}>{name} {surname}</h5>
                    <button onClick={loginForm}>{handleAcc}</button>
                </div>
            </div>
        </div>
    )
} 


export default Nav;
