import React, { useState } from 'react'
import './App.css';
import { evaluate } from 'mathjs';
import { type } from '@testing-library/user-event/dist/type';



function App() {
  const [result, setResult] = useState("");
 
  const calculatorbutton = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.', '+', '-', '*', '/', '%']
  const clickHandle = (event) => {
    setResult(result.concat(event.target.value))
    
  }
  const clearDisplay = (e) => {
    setResult("")

  }
  const calculate = () => {
    setResult(evaluate(result))
  }
  return (
    
    <div id='Numbers' className='calc'>
      <p id='answer'>{result}</p>

<div id='Button'>
     { calculatorbutton.map((buttonValue,index)=>{
      return <input type='button' value={buttonValue} key={index} className='button' onClick={clickHandle}/>
     })
     }
      </div>
       <div id='delButton'>
      <input type='button' value={"DEL"} className='button button1' onClick={clearDisplay}/>
      <input type='button' value={"="} className='button button1' onClick={calculate}/>
      </div>


      </div>

  )
}









  
      // <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React */}
        {/* </a>
      </header> */}
    
  


export default App;
