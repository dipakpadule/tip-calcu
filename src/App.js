import logo from './images/logo.svg';
import './App.scss';

function App() {
  return (
    <article className='tipcalcu'>
      <section className='logo'>
        <img src={logo} alt=''/>
      </section>
      <section className='tipcalcu-main'>
        <section className='main-form'>
          <div className='bill-input'>
            <label htmlFor="bill">Bill</label>
            <input type="number" id="bill" name="bill" placeholder='$'></input>
          </div>
          <div className='tip-input'>
            <p>Select Tip %</p>
            <section className='tip'>
              <div className='tips t5'>5%</div>
              <div className='tips t10'>10%</div>
              <div className='tips t15 active-tip'>15%</div>
              <div className='tips t25'>25%</div>
              <div className='tips t50'>50%</div>
              <div id='custom-tip'><input type="number" className='custom-tip' name="custom-tip" placeholder='CUSTOM'></input></div>
            </section>
          </div>
          <div className='people-input'>
            <label htmlFor="pcount">Number Of People</label>
            <input type="number" id="pcount" name="pcount" placeholder=''></input>
          </div>
        </section>
        <section className='main-display'>
          <div className='md1'>
            <div className='d1'>
              <strong>Tip Amount</strong>
              <p>/ Person</p>
            </div>
            <strong>$4.27</strong>
          </div>
          <div className='md1'>
            <div className='d1'>
              <strong>Total</strong>
            </div>
            <strong>$32.79</strong>
          </div>
          <button>RESET</button>
        </section>
      </section>
    </article>
  );
}

export default App;