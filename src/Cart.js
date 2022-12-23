import React from 'react';
import CartItem from './CartItem';

const Cart=(props)=> {
        const { products }  = props;
        return (
            <div className='cart'>
                {products.map((product) => {
                  return <CartItem 
                           product={product} 
                           key={product.id}
                           onIncreaseQuantity={props.onIncreaseQuantity}
                           onDecreaseQuantity={props.onDecreaseQuantity}
                           onDeleteValue={props.onDeleteValue}
                           />
                
                })}

            </div>
        )
}
export default Cart;