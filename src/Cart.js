import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            products: [
             {  
              title:"watch",
              price:99,
              qty:1,
              img:'',
              id:1
             },
             {
              title:"Mobile Phone",
              price:999,
              qty:10,
              img:'',
              id:2
             },
             {
              title:"Laptop",
              price:11,
              qty:4,
              img:'',
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
      
    render () {
        const { products }  = this.state;
        return (
            <div className='cart'>
                {products.map((product) => {
                  return <CartItem 
                           product={product} 
                           key={product.id}
                           onIncreaseQuantity={this.handleIncreaseQuantity}
                           onDecreaseQuantity={this.handleDecreaseQuantity}
                           onDeleteValue={this.handleDeleteProduct}
                           />
                
                })}

            </div>
        )
    }
}
export default Cart;