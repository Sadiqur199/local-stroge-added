import React from 'react';
import Shoes from '../shoes/Shoes';

const SingleShoe = (props) => {
  const shoes = [
    {id:1,name:'shoe1',price:1000},
    {id:2,name:'shoe2',price:1000},
    {id:3,name:'shoe3',price:1000},
    {id:4,name:'shoe4',price:1000},
    {id:5,name:'shoe5',price:1000}
  
    ]
  return (
    <div>
      <h1>SHow the page</h1>
      {
        shoes.map(shoe=><Shoes name={shoe.name} price={shoe.price}
        key = {shoe.id}
        shoe = {shoe}
        ></Shoes>)
      }
    </div>
  );
};

export default SingleShoe;