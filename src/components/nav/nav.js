import './nav.css'
import React, { useState, useEffect} from 'react';
import lock from "../../images/Group.png";
import profile from "../../images/Group 29.png";
import arrow from "../../images/Vector 19.png";
import cart from "../../images/Ellipse 24.png";
import Login from './loginPage/login';
import logo from '../../images/logonano.png';
import greyheart from "../../images/greyheart.png";

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

    const [isBoxOpen, setIsBoxOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showList, setShowList] = useState(false);
    const [showFavorit, setShowFavorit] = useState(false);
    const [products, setProducts] = useState([]);


    const showElement = () =>{
        if(show === "none") setShow("block")
        else setShow("none")
    }
    const loginForm = () =>{
        
        
        if(loginform === "none"){
            if(handleAcc ==="Log In"){
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
        setShowLogin(true);
        setShowList(false);
        setShowFavorit(false);
        if(login === "none"){
          setLogin("block")  
        } 
        else setLogin("none")
    }
    useEffect( () =>{
        if(thecount > 0) setShowcart("block")
        else setShowcart("none")
    },[thecount])

    

    const imageHandler = () => {
       
        setShowLogin(false);
        setShowList(true);
        setShowFavorit(false);
    };

    const favoritimg = () => {
        setShowFavorit(true);
        setShowList(false);
        setShowLogin(false);
    }

    // const handleAddProduct = () => {
    //     setProducts(prevProducts => [...prevProducts, `Product ${prevProducts.length + 1}`]);
    // };

    return (
        <div className='navbar row'>
            <div style={{display: loginform}} className="form">
                <Login submits={setLoginform} name={setName} surname={setSurname} setB={setSetAccount} setA={setSetAccount1} setbutton={setHandleAccount}/>
            </div>
            <img src={logo} className='col-2 logon'></img>
            <div className='col-6 extranav'>
                <input className='search'  placeholder='Search Here...' /> <br></br>
                <div className='category'>
                    <h3>All</h3>
                    <h3>Phones</h3>
                    <h3>TVs</h3>
                    <h3>Laptops</h3>
                    <h3>Watches</h3>
                </div>
            </div>
            <div className=' icons row'>
                {/* <div className='dropdown'>
                    <div style={{display: show}}>
                    <span onClick={() => setSelected("AL")}>AL</span>
                    <span onClick={() => setSelected("MK")}>MK</span>
                    <span onClick={() => setSelected("EN")}>EN</span>
                    </div>
                    <h3 onClick={showElement}>{selected}<img src={arrow} alt='_'/></h3>
                    
                </div> */}

                

                <img src={profile} alt='profile' onClick={loginHandler} />
                {showLogin && <div style={{ display: login }} className="login">

                    <h5 style={{ display: account1 }}>Not logged in</h5>
                    <h5 style={{ display: account }}>{name} {surname}</h5>
                    <button onClick={loginForm}>{handleAcc}</button>
                </div>}

                {/* <img src={lock} alt='lock' className='lock'/> */}
                {/* <div><img src={cart} alt='lock' className='cart' style={{display: Showcart}}/>
                <p className='cartp' style={{display: Showcart}}>{thecount}</p></div> */}

    <div className="product-box">
      <img
        src={lock}
        alt="Lock"
        className={`lock ${isBoxOpen ? 'open' : ''}`}
        onClick={imageHandler}
      />
      {showList && (
        <div className="product-list">
          <h2 className='productList'>Product List</h2>
          <ul>
            <li className='product'>
                <p className='titlep'>Product 1(Titile of the product)</p>
                <p>200.00 MKD</p>
            </li>
          </ul>
          <ul>
            {products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
          <button  className='viewall'>View All</button>
        </div>
      )}
    </div>

                {/* <div className="product-list">
                    <div className={`lock-image ${isLocked ? 'locked' : ''}`} onClick={handleLockClick} />
                    <button onClick={handleAddProduct}>Add Product</button>
                    {isLocked && (
                        <ul>
                            {products.map((product, index) => (
                                <li key={index}>{product}</li>
                            ))}
                        </ul>
                    )}
                </div> */}

                <div className='favorit-box'>
                <img src={greyheart} className='gheart' onClick={favoritimg}></img>

                {showFavorit && (
        <div className="favorit-list">
          <h2 className='favoritList'>Favorite List</h2>
          <ul>
            <li className='product'>
                <p className='titlefavorit'>Product 1(Titile of the product)</p>
                <p>200.00 MKD</p>
            </li>
          </ul>
          {/* <ul>
            {products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul> */}
          {/* <button  className='viewfavorit'>View All</button> */}
        </div>
      )}

                </div>
               
                
            </div>
        </div>
    )
} 


export default Nav;
