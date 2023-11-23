import { useState } from 'react'
import ReactSvg from './assets/react.svg';
import CI from '/calculatorIcon.svg'
import viteLogo from '/vite.svg'
import DatePicker from 'react-date-picker'
// import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [type,setType] = useState('Expence Type');
  const [date,setDate] = useState('');
  const [expence,setExpence] = useState();
  const [amount,setAmount] = useState('Enter Amount');
  const [transaction,setTransaction] = useState([]);
  const [newTransaction, setNewTransaction] = useState('');

  const selectDate = (e)=>{
    setDate(e.target.value);
    // console.log(date);
  }

  const selectExpence = (e) => {
    setExpence(e.target.value);
    // console.log(expence);
  }

  const selectType = (e)=>{
    setType(e.target.value);
    // console.log(type);
  }

  const selectAmount = (e) =>{
    setAmount(e.target.value);
  }

  // console.log(amount);


  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTransaction(`${type} and ${date}`);
    setTransaction(transaction.push(`${type} and ${date}`));
    console.log(`Value is: ${type} and ${date} and ${expence} and ${amount}`)
  }

  console.log(transaction, 'transaction');


  return (
    <div className='firstDiv'>
      <div className='mainDiv'>
        {/* <p>hello</p> */}
        <img src={CI} className="logo1"  />
        

        <div className="title">
          <h1>EXPENSE TRACKER</h1>

          <div className="discription">
           {/* <input type="text" value='Add a description...' className='description' /> */}
          <h3>NOW KEEP A TRACK OF YOUR EXPENSE WITH OUR EXPENCE TRACKER APPLICATION</h3>
          
          </div>
          <div className="expences">
            <h5>ADD YOUR EXPENCES</h5>
            <form onSubmit={handleSubmit} >
              <input
              type="text"
              required
              value={type}
              onChange={selectType}
              />
              <input type="date" value={date} onChange={selectDate}/>
              <select value={expence} onChange={selectExpence}>
              <option value="Grocery">Grocery</option>
              <option value="Rent">Rent</option>
              <option value="Fuel">Fuel</option>
              <option value="Entertainment">Entertainment</option>
              <option value="ServicePayment">ServicePayment</option>
              <option value="BillPayment">BillPayment</option>
              <option value="Medical">Medical</option>
              </select>

              <input type="number" value={amount} onChange={selectAmount} />
              <button type='Submit'>Submit Expence</button>

            </form>

            <p>{transaction}</p>

          </div>
          <div className="categories">

          </div>
        </div>
      </div>


    </div>
  )
}

export default App
