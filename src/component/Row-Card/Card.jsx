import React from 'react'

function Card({images}) {
  return (
    <div className='card'>
        <img src={images} alt="this is xxx"/>
    </div>
  )
}

export default Card;