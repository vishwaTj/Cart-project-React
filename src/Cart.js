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
    render () {
        const { products }  = this.state;
        return (
            <div className='cart'>
                {products.map((product) => {
                  return <CartItem 
                           product={product} 
                           key={product.id}
                           />
                
                })}

            </div>
        )
    }
}
export default Cart;