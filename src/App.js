import React, { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/filter/filter';
import Footer from './components/footer/footer';
import MainContainer from './components/maincontainer/maincontainer';
import Nav from './components/nav/nav';
import Stocks from './components/stocks/stocks';
import Description from './components/stocks/description/description';

const App = () => {
  const [thecount, setThecount] = useState(0)
  const [thecount1, setThecount1] = useState(0)
  const [thecount2, setThecount2] = useState(0)
  const [thecount3, setThecount3] = useState(0)
  const [thecount4, setThecount4] = useState(0)
  const [thecount5, setThecount5] = useState(0)
  const [thecount6, setThecount6] = useState(0)
  const [thecount7, setThecount7] = useState(0)
  const [thecount8, setThecount8] = useState(0)

  useEffect(()=>{
    setThecount(prev =>{
      return prev = thecount1+thecount2+thecount3+thecount4+thecount5+thecount6;
    })
  },[thecount1,thecount2,thecount3,thecount4,thecount5,thecount6])

  const navbar = <Nav thecount={thecount}/>
  return (
    <div className='app'>

      
      <MainContainer navbar= {navbar}></MainContainer>
      <div className='row products'>
        <div className='col-3'>
          <Filter />
        </div>
        <div className='row mystocks'>
          <Stocks title="SAMSUNG QLED QE55Q90R BRR12M001WWEG" setThecount={setThecount1}/>
          <Stocks title="Samsung Réfrigérateur BRR12M001WWEG" setThecount={setThecount2}/>
          <Stocks title="Samsung Réfrigérateur BRR12M001WWEG" setThecount={setThecount3}/>
          <Stocks title="Samsung Réfrigérateur BRR12M001WWEG" setThecount={setThecount4}/>
          <Stocks title="Samsung Réfrigérateur BRR12M001WWEG" setThecount={setThecount5}/>
          <Stocks title="Samsung Réfrigérateur BRR12M001WWEG" setThecount={setThecount6}/>
          <Stocks title="Samsung Réfrigérateur BRR12M001WWEG" setThecount={setThecount7}/>
          <Stocks title="Samsung Réfrigérateur BRR12M001WWEG" setThecount={setThecount8}/>
        </div>
      </div>
      <div>
        <Footer />
        <Description/>
      </div>
    </div>
  );
}

export default App;
