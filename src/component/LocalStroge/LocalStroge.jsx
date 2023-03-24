const addItem = (id) =>{
let shoppingCart;
const sortCard = localStorage.getItem('shoppingCart');
if(sortCard)
{
  shoppingCart = JSON.parse(sortCard);
}
else{
  shoppingCart ={}
}

const quantity = shoppingCart[id]
  if(quantity){
    const newQuantity = parseInt(quantity)+1
    shoppingCart[id]  = newQuantity;
  }
  else{
     shoppingCart[id] = 1;
  }

localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart))
}

//remove button working

const removeDB = (id)=>{
  const shortCart = localStorage.getItem('shoppingCart')
  if(shortCart){
    const shoppingCart = JSON.parse(shortCart)
    if(id in shoppingCart){
      delete shoppingCart[id];
      localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart))

    }

  }
}
export {addItem,removeDB}