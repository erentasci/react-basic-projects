import './App.css';
import { useState } from 'react';

function App() {


  const [count,setCount] = useState(0);


  const decrease = () => {
    setCount(count-1);
  }

  const reset = () =>{
    setCount(0);
  }

  const increase = () =>{
    setCount(count+1);
  }

  return (

    <div className="container">

        <h1>Counter App</h1>
            
            <h2 className="countNum">{count}</h2>
        
        <div className="buttons"> 

            <button className="btn btn-decrease" onClick={decrease}>
              Decrease
            </button>

            <button className="btn btn-reset" onClick={reset}>
              Reset
            </button>

            <button className="btn btn-increase" onClick={increase}>
              Increase
            </button>

        </div>

    </div>

  );
}

export default App;
