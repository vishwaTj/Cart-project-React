import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
          title:"Mobile Phone",
          price:99,
          Sqty:1
        }
        // this.increaseQty=this.increaseQty.bind(this);
    }
    increaseQty=()=>{ // binds it to the class 
        console.log(this);
    }
    render(){
      const{title,price,qty}=this.state; 
      return(  
       <div className="cart-item">
        <div className="left-block">
           <img style={styles.image}/>
        </div>
        <div className="right-block">
            <div style={{ fontSize: 25}}>{this.state.title}</div>
            <div style={{ color:'#777'}}>Rs {price}</div>
            <div style={{ color:'#777' }}>Qty: {qty}</div>
        </div>
        <div className="cart-item-actions">
            {/* Buttons */}
            <img 
               alt="increase" 
               className="action-icons" 
               src='https://cdn-icons-png.flaticon.com/128/992/992651.png'
               onClick={this.increaseQty}>
            </img>
            
            <img
               alt="derease"
               className="action-icons"
               src='https://cdn-icons-png.flaticon.com/512/992/992683.png'>
            </img>
            
            <img
               alt="delete"
               className="action-icons"
               src='https://cdn-icons-png.flaticon.com/128/1214/1214428.png'>
            </img>

        </div>
       </div>
      );
    }
}

// we styles blocks by creating objects below

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;