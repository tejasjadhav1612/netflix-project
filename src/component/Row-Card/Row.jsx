import React from 'react';
import Card from './Card';
// import download from "../../download.jpeg"
function Row({ title, arr = [

] }) {
  const image_url = "https://image.tmdb.org/t/p/original"
  return (
    <div className="row">
      <h1>{title}</h1>
      <div>
        {arr.map((item,index)=>(
          <Card key={index} images={`${image_url}/${item.poster_path}`}/>
        ))}

      </div>
    </div>
  )
}

export default Row