import logo from './images/logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';

function App() {
  const initData = {bill:'0', tip:'15', pcount:'1'};
  const [userData, setUserdata] = useState(initData);

  const [tippp, Settippp] = useState(0);//tip per person calculated 
  const [total, setTotal] = useState(0); //total tip calculated

  
  //handling user entered data
  const handleUserData = (e)=>{
    const {name, value} = e.target;
    setUserdata({...userData, [name]:value});
  };

  //
  const handleClick = (e)=>{
    const tip = e.target.innerHTML.slice(0,2);
    setUserdata({...userData, tip:tip});
  }

  useEffect(()=>{
    tipCalcu(userData);
  },[userData])
 
  const tipCalcu = (data)=>{
    let tpp = ((data.bill * (data.tip / 100))/ data.pcount).toFixed(2)*1;
    Settippp(tpp);
    let tot = ((tpp * data.pcount) + (data.bill*1));
    setTotal(tot);
  }

  const onReset = ()=>{
    setUserdata(initData);
    setTotal(0);
    Settippp(0);
  }
  return (
    <article className='tipcalcu'>
      <section className='logo'>
        <img src={logo} alt=''/>
      </section>
      <section className='tipcalcu-main'>
        <section className='main-form'>
          <div className='bill-input'>
            <label htmlFor="bill">Bill</label>
            <input type="number" id="bill" name="bill" placeholder='$' onChange={handleUserData}></input>
          </div>
          <div className='tip-input'>
            <p>Select Tip %</p>
            <section className='tip'>
              <div className='tips t5' onClick={handleClick}>5 %</div>
              <div className='tips t10' onClick={handleClick}>10%</div>
              <div className='tips t15 active-tip' onClick={handleClick}>15%</div>
              <div className='tips t25' onClick={handleClick}>25%</div>
              <div className='tips t50' onClick={handleClick}>50%</div>
              <div id='custom-tip'><input type="number" className='custom-tip' name="tip" placeholder='CUSTOM' onChange={handleUserData}></input></div>
            </section>
          </div>
          <div className='people-input'>
            <label htmlFor="pcount">Number Of People</label>
            <input type="number" id="pcount" name="pcount" placeholder='' onChange={handleUserData}></input>
          </div>
        </section>
        <section className='main-display'>
          <div className='md1'>
            <div className='d1'>
              <strong>Tip Amount</strong>
              <p>/ Person</p>
            </div>
            <strong className='tipb'>${tippp}</strong>
          </div>
          <div className='md1 d2'>
            <div className='d1'>
              <strong >Total</strong>
            </div>
            <strong className='tipb'>${total}</strong>
          </div>
          <button onClick={onReset}>RESET</button>
        </section>
      </section>
    </article>
  );
}

export default App;