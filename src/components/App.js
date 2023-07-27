import * as React from 'react';
import Button from '@mui/material/Button';
import '../../src/css/App.css';
import { useEffect, useState } from 'react';
import bike1 from "../images/bike1.jpg"
import bike2 from "../images/bike2.jpg"
import scooter1 from "../images/scooter1.jpg"
import scooter2 from "../images/scooter2.jpg"

import HardwareSet from './HardwareSet';



const App = () => {
  const [inputValue, setInputValue] = useState('');
  const hwsets = ['EcoBikes', 'EcoScooters']

  {/*example database*/ }
  const hwSet1 = {
    HardwareSet: "1",
    Capacity: 10000,
    Available: 9000
  };

  {/*passing in the number as a checkout function*/ }
  const checkOut = (number, setNumber) => {
    console.log(typeof (number))
    console.log(number)
    alert("You have checked out " + number + ' ' + hwsets[setNumber])
  }

  {/*passing in the number as a checkin function*/ }
  const checkIn = (number, setNumber) => {
    console.log(typeof (number))
    console.log(number)
    alert("You have checked in " + number + ' ' + hwsets[setNumber])
  }


  return (
    <div className="App">
      {/*title*/}
      <h1>ECO WHEELS RENTAL</h1>

      {/*container for both hw sets*/}
      <div className="flex-container">

        {/*first container for hwset 1*/}
        <div className="flex-child container1">
          {/*heading*/}
          <div className="header">
            <h2>{hwsets[0]}</h2>
          </div>
          <img src={bike1} alt="bike" />
          {/*database information*/}
          <div className='subheader'>
            <HardwareSet set={hwSet1} />
          </div>
          {/*input value box to check in or check out*/}
          <div className='checkinoutvalue'>
            <input type="number"
              placeholder="Enter value here"
              value={inputValue}
              onChange={(e) => setInputValue(parseInt(e.target.value))}
            />
            <br />
            <Button type='submit' variant= "contained" className= "button" onClick={() => { checkOut(parseInt(inputValue), 0) }}> Check Out</Button>
            <Button type='submit' variant= "contained" className= "button" onClick={() => { checkIn(parseInt(inputValue), 0) }}> Check In</Button>
          </div>

        </div>





        <div className="flex-child container2">
          {/*heading*/}
          <div className="header">
            <h2>{hwsets[1]}</h2>
          </div>
          <img src={scooter2} alt="bike" />
          {/*database information*/}
          <div className='subheader'>
            <HardwareSet set={hwSet1} />
          </div>
          {/*input value box to check in or check out*/}
          <div className='checkinoutvalue'>
            <input type="number"
              placeholder="Enter value here"
              value={inputValue}
              onChange={(e) => setInputValue(parseInt(e.target.value))}
            />
            <br />
            <Button type='submit' variant= "contained" className= "button" onClick={() => { checkOut(parseInt(inputValue), 0) }}> Check Out</Button>
            <Button type='submit' variant= "contained" className= "button" onClick={() => { checkIn(parseInt(inputValue), 0) }}> Check In</Button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;


