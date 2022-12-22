import React from 'react';

class CartItem extends React.Component{
    // constructor(){
    //     super();
    //     this.state={
    //       title:"Mobile Phone",
    //       price:99,
    //       qty:1
    //     }
    //     // this.increaseQty=this.increaseQty.bind(this);
    //     // this.testing();
    // }
    // testing(){
    //     const promise = new Promise((resolve,reject)=>{
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     })

    //     promise.then(()=>{
    //         //setState acts like a synchronous call
    //         this.setState({qty: this.state.qty + 10});
    //         this.setState({qty: this.state.qty + 10});
    //         this.setState({qty: this.state.qty + 10});

    //         console.log('this',this.state);
    //     })
    // }
    increaseQty=()=>{ // binds it to the class
        // this.strategy.qty+=1;
        // console.log('this',this.state);
        // setState form 1 (this is the object form)
        // this.setState({
        //     qty: this.state.qty+1
        // });

        // setState form 2 (this is the function form) if prev state req use this
        this.setState((prevState)=>{
            return {
                qty: prevState.qty + 1
            }
        });    
    }
    decreaseQty=()=>{
        const { qty } = this.state;

        if (qty === 0) {
            return;
        }

        this.setState((prevState)=>{
               return {
                  qty:prevState.qty - 1
         }
        });
    }
    render(){
      const{title,price,qty}=this.props.product;
      const{
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteValue}=this.props;
    //   this.setState({qty: this.state.qty + 10}); 
      return(  
       <div className="cart-item">
        <div className="left-block">
           <img style={styles.image}/>
        </div>
        <div className="right-block">
            <div style={{ fontSize: 25}}>{title}</div>
            <div style={{ color:'#777'}}>Rs {price}</div>
            <div style={{ color:'#777' }}>Qty: {qty}</div>
         <div className="cart-item-actions">
            {/* Buttons */}
            <img 
               alt="increase" 
               className="action-icons" 
               src='https://cdn-icons-png.flaticon.com/128/992/992651.png'
               onClick={() => onIncreaseQuantity(product)}>
            </img>
            
            <img
               alt="derease"
               className="action-icons"
               src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
               onClick={() => onDecreaseQuantity(product)}>
            </img>
            
            <img
               alt="delete"
               className="action-icons"
               src='https://cdn-icons-png.flaticon.com/128/1214/1214428.png'
               onClick={() => onDeleteValue(product.id)}>
            </img>

           </div>
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