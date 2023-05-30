import React, { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/filter/filter';
import Footer from './components/footer/footer';
import MainContainer from './components/maincontainer/maincontainer';
import Nav from './components/nav/nav';
import Stocks from './components/stocks/stocks';
import Description from './components/stocks/description/description';
import { variables } from "./Variables";
import Contact from './components/contact/contact';

const App = () => {

        //Backend
        const [product, setProduct] = useState([]);
        // const [modalTitle, setModalTitle] = useState("");
        // const [ProductName, setProductName] = useState("");
        // const [ProductId, setProductID] = useState(0);
        // const [description, setDescription] = useState("");
    
        const refreshList = () => {
            fetch(variables.API_URL + 'product')
                .then(response => response.json())
                .then(data => {
                  setProduct(data);
                });
        };
    
        useEffect(() => {
            refreshList();
        }, []);
    

     
    
  const [thecount, setThecount] = useState(0)
  const [thecount1, setThecount1] = useState(0)
  const [thecount2, setThecount2] = useState(0)
  const [thecount3, setThecount3] = useState(0)
  const [thecount4, setThecount4] = useState(0)
  const [thecount5, setThecount5] = useState(0)
  const [thecount6, setThecount6] = useState(0)
  const [thecount7, setThecount7] = useState(0)
  const [thecount8, setThecount8] = useState(0)
  const [visible, setVisible] = useState("hideDescription") //SHTOJA QITO
  const [visible2, setVisible2] = useState("false") //SHTOJA QITO part 2

  useEffect(()=>{
    setThecount(prev =>{
      return prev = thecount1+thecount2+thecount3+thecount4+thecount5+thecount6;
    })
  },[thecount1,thecount2,thecount3,thecount4,thecount5,thecount6])

   const onClickDescription =(show)=>{ //SHTOJA QITO
       setVisible(show)
       setVisible2("false") //SHTOJA QITO part 2
   }
   const onClickDescription2 = (clicked) => {
     //SHTOJA QITO part 2
     setVisible2(clicked);
   };


  const navbar = <Nav thecount={thecount} />;
  return (
    <div className="app">
      <MainContainer navbar={navbar}></MainContainer>
      <div className="row products">
        <div className="col-3">

          <Filter />
        </div>
        <div className="row mystocks">
          {/* {product.map((prod) =>{
           return (<Stocks key={prod.ProductID} 
              productName={prod.ProductName}
              price={prod.Price}
              description={prod.Description}
              category={prod.CategoryID}
              setThecount={setThecount1}
              toCloseDesc={visible2}
              onClickFunction={onClickDescription}> 
              </Stocks>

              <Description 
              classNames = {visible} 
              hideDesc ={onClickDescription2}
              description={prod.Description}
              stocks={prod.Stocks}
              brand={prod.Brand}
              />)
              

          })} */}

          {product.map((prod) => {
            return (
              <React.Fragment key={prod.ProductID}>
                <Stocks
                  productName={prod.ProductName}
                  price={prod.Price}
                  description={prod.Description}
                  category={prod.CategoryID}
                  setThecount={setThecount1}
                  toCloseDesc={visible2}
                  onClickFunction={onClickDescription}
                >
                  <Description
                  classNames={visible}
                  hideDesc={onClickDescription2}
                  description={prod.Description}
                  stocks={prod.Stocks}
                  brand={prod.Brand}
                />
                </Stocks>
                
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div>
        <Contact/>
        <Footer />
        <Description/>
      </div>
    </div>
  );
}

export default App;
