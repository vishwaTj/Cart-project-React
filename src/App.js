import CartItem from "./CartItem";
import POL from "./pol";
import Cart from "./Cart";
import Navbar from "./NavBar";
import { render } from "@testing-library/react";
import React from "react";


class App extends React.Component {
   constructor(){
     super();
     this.state = {
         products: [
          {  
           title:"watch",
           price:99,
           qty:1,
           img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
           id:1
          },
          {
           title:"Mobile Phone",
           price:999,
           qty:10,
           img:'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
           id:2
          },
          {
           title:"Laptop",
           price:11,
           qty:4,
           img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
           id:3
          }
    
      ]
    // this.increaseQty=this.increaseQty.bind(this);
    // this.testing();
     }
  }
  handleIncreaseQuantity=(product)=>{
    console.log("Hey increase the quantity of ",product);
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
       products: products  // change products of state from above to new products1 array formed
    })
  }
  handleDecreaseQuantity=(product)=>{
     console.log("Hey increase the quantity of ",product);
     const {products} = this.state;
     const index = products.indexOf(product);

     if(products[index].qty == 0){
         return;
     }

     products[index].qty -= 1;
     this.setState({
        products: products  // change products of state from above to new products1 array formed
     })
  }
  handleDeleteProduct = (id) =>{
     const {products} = this.state;
     // returns an array where item id is not involved
     const items = products.filter((item)=> item.id!=id);
   
     this.setState({
      products:items
     }) 
  }
 getCartCount=()=>{
   const {products} = this.state;
   let count = 0;
   products.forEach((product)=>{
    count+=product.qty;
   })
   return count;
 } 
 getCartTotal=()=>{
  const {products} = this.state;
  let cartTotal=0;

  products.map((product)=>{
    cartTotal = cartTotal + product.qty*product.price;
  })

  return cartTotal;
 }
 render(){
  const {products} = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart 
        products={products} 
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteValue={this.handleDeleteProduct}
       />
       <div style={ { padding:10, fontSize:20 }}>
          TOTAL : {this.getCartTotal()}
       </div>
    </div>
  );
}
}
export default App;
