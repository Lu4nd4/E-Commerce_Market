import React, { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/filter/filter';
import Footer from './components/footer/footer';
import MainContainer from './components/maincontainer/maincontainer';
import Nav from './components/nav/nav';
import Stocks from './components/stocks/stocks';
import { variables } from "./Variables";
import Contact from './components/contact/contact';
import Payment from './components/payment/payment';

const App = () => {

        //Backend
        const [product, setProduct] = useState([]);
        const [product_color, setproduct_color] = useState([]);
        const [ImageFilter, setImageFilter] = useState([]);
        const [imageUrl, setImageUrl] = useState('');


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

              const refreshList3 = () => {
                fetch(variables.API_URL + 'ImageFilter')
                    .then(response => response.json())
                    .then(data => {
                      //const { imageUrl } = data.Image;
                      setImageFilter(data);
                    });
                  };
              
              const refreshList2 = () => {
                fetch(variables.API_URL + "product_color")
                  .then((response) => response.json())
                  .then((data) => {
                    setproduct_color(data);
                  });
              };
              
        useEffect(() => {
            refreshList();
            refreshList2();
            refreshList3();
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
  const [visible, setVisible] = useState("hideDescription desc") //SHTOJA QITO
  const [visible2, setVisible2] = useState("false") //SHTOJA QITO part 2

  useEffect(()=>{
    setThecount(prev =>{
      return prev = thecount1+thecount2+thecount3+thecount4+thecount5+thecount6;
    })
  },[thecount1,thecount2,thecount3,thecount4,thecount5,thecount6])

 



  const navbar = <Nav thecount={thecount} />;
  return (
    <div className="app">
      <MainContainer navbar={navbar}></MainContainer>
      <div className="row products">
        <div className="filtercolumn">
          <Filter />
        </div>
        <div className='mystocks'>

          {product.map((prod) => {
            return (
              <React.Fragment key={prod.ProductID}>
                <Stocks
                  productName={prod.ProductName}
                  price={prod.Price}
                  description={prod.Description}
                  category={prod.CategoryID}
                  setThecount={setThecount1}
                  id={prod.ProductID}
                  idImg={ImageFilter.map(img => {if(prod.Product_ColorID === img.Product_ColorID) return img.Product_ColorID})}
                  toCloseDesc={visible2}
                  imageSource ={ImageFilter.map(img => {if(prod.Product_ColorID === img.Product_ColorID) return img.Image})}
                > </Stocks>
                
                  
              </React.Fragment>
            );
          })}

          
        </div>
      </div>
      <div>
        
        <Footer />

        <Contact/>

        <Payment/>
      </div>
    </div>
  );
}

export default App;
