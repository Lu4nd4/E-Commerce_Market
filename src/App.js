import React, { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/filter/filter';
import Footer from './components/footer/footer';
import MainContainer from './components/maincontainer/maincontainer';
import Nav from './components/nav/nav';
import Stocks from './components/stocks/stocks';
import Description from './components/stocks/description/description';
import { variables } from "../../Variables";



const App = () => {

      
        //Backend
    
        constructor = (props) => {
          super(props);
      
          this.state = {
              product: []
          };
      }
    
    
    
  const [thecount, setThecount] = useState(0)
  const [thecount1, setThecount1] = useState(0)
  const [thecount2, setThecount2] = useState(0)
  const [thecount3, setThecount3] = useState(0)
  const [thecount4, setThecount4] = useState(0)
  const [thecount5, setThecount5] = useState(0)
  const [thecount6, setThecount6] = useState(0)
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
   const onClickDescription2 =(clicked)=>{ //SHTOJA QITO part 2
      setVisible2(clicked)
  }


  const navbar = <Nav thecount={thecount}/>
  return (
    <div className='app'>
      
      <MainContainer navbar= {navbar}></MainContainer>
      <div className='row products'>
        <div className='col-3'>
          <Filter />
        </div>
        <div className='row mystocks'>
          <Stocks title="SAMSUNG QLED QE55Q90R" setThecount={setThecount1} toCloseDesc={visible2} onClickFunction={onClickDescription}/>{/*//SHTOJA QITO part 2 */}
          <Description classNames = {visible} hideDesc ={onClickDescription2}/> {/*SHTOJA QITO*/} {/*//SHTOJA QITO part 2 */}

          {/* <Stocks title="Samsung Réfrigérateur BRR12M001WWEG" setThecount={setThecount2}/>
          <Stocks title="Samsung Réfrigérateur BRR12M001WWEG" setThecount={setThecount3}/>
          <Stocks title="Samsung Réfrigérateur BRR12M001WWEG" setThecount={setThecount4}/>
          <Stocks title="Samsung Réfrigérateur BRR12M001WWEG" setThecount={setThecount5}/>
          <Stocks title="Samsung Réfrigérateur BRR12M001WWEG" setThecount={setThecount6}/> */}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
