import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour}) => {

  const [readMore, setReadMore] = useState(false);

  const changeReadMore = () => {
    setReadMore(!readMore);
  }


  return (

    <article className='single-tour' >

      <img src={image} alt={image}/>

        <footer>
          <div className='tour-info'>
              <h4>{name}</h4>
              <h4 className='tour-price'>${price}</h4>
          </div>

          {/*Readmore */}

          <p>{readMore ? info : `${info.substring(0,200)}...`}
            <button onClick={changeReadMore}>
              {readMore ? `Show Less` :  `Read More`}
            </button>
          </p>
          <button className='delete-btn' onClick={() => removeTour(id)}>Not Interested</button>
        </footer>
    </article>


  )
};

export default Tour;