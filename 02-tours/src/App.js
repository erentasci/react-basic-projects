import React, { useState, useEffect } from 'react'
import Loading from "../src/components/Loading"
import Tours from "../src/components/Tours"

const URL = 'https://course-api.com/react-tours-project';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter( (tour) => tour.id !==id);
    setTours(newTours);
  }

  // Get informations from URL Adress function
  const getData = async () => {
    
    setIsLoading(true);

    try{

      const response = await fetch(URL);
      const data = await response.json();
      setIsLoading(false);
      setTours(data);

    }catch(err){
      setIsLoading(false);
      console.log(err);
    }




  }


  // When component rendered run getData function
  useEffect( () => {
    getData();
  },[])

  if(isLoading){
    return (
      <main>
        <Loading/>
      </main>
    )
    
  }

  if(tours.length === 0){
    return (
      <main>
        <div className='title'>
          <h2>No Tours Left</h2>
          <button  className='btn' onClick={getData}>Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App
