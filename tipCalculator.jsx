import React, { useState } from 'react';
import './tipCalculator.css';


const CalculateTip = () => {
    const [billAmount, setBillAmount] = useState(0);
    const [tipPercentage, setTipPercentage] = useState(0);
    const [numOfPeople, setNumOfPeople] = useState(1);

    const handleBillChange = (event) => {
        setBillAmount(event.target.value);
    
      };

    const handleTipChange = (event) => {
        setTipPercentage(event.target.value);
    
      };

    const handlePeopleChange = (event) => {
        setNumOfPeople(event.target.value);
    
      };

    const calculateTotalPerPerson = () => {
        const bill = parseFloat(billAmount)
        var totalTip = (billAmount * tipPercentage) / 100
        return ((bill + totalTip)/numOfPeople).toFixed(2);
    }


    return (
        <div className='tip-container'>
            <center>
            <h1 className="heading"> Tip Calculator </h1>
            <div className='inputting'>
                <label> Bill Amount: </label>
                <input type="number" value={billAmount} onChange={handleBillChange} />
            </div>
            <div className='inputting'>
                <label> Tip Percentage: </label>
                <select value={tipPercentage} onChange={handleTipChange}>
                <option value={10}>10%</option>
                <option value={15}>15%</option>
                <option value={20}>20%</option>
                <option value={25}>25%</option>  
                </select>          
          </div>
          <div className='inputting'>
                <label> Number of People: </label>
                <input type="number" value={numOfPeople} onChange={handlePeopleChange} />
            </div>

            <div className="result">
                <p> Each person will pay a total of: </p>
                <p> ${calculateTotalPerPerson()}</p>
            </div>
            </center>
        </div> 
    );
}

export default CalculateTip;