import React from 'react';
import { addItem, removeDB } from '../LocalStroge/LocalStroge';
import SingleShoe from '../Shoe/SingleShoe';
import './Shoes.css'

const Shoes = (props) => {
  const {name,price,id}= props.shoe
  const addToCartId = (id)=>{
   addItem(id)
  }
  
  //remove DB
  const removeDb = (id)=>{
    removeDB(id);
  }

  const addToCart = ()=>addToCartId(id);
  return (
    <div className='patternDesign'>
      <p>ID:{id}</p>
       <p>Name:{name}</p>
       <p>Price:{price}</p>
       <button onClick={addToCart}>Add To Cart</button>
       <button onClick={()=>removeDb(id)}>Remove</button>
    </div>
  );
};

export default Shoes;











//defualt export 
// const add = (first,second)=>{
//   return first+second;
// }
// export default add;

