import CartItem from "./CartItem";
import POL from "./pol";
import Cart from "./Cart";
import Navbar from "./NavBar";
import { render } from "@testing-library/react";
import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { onSnapshotsInSync } from "firebase/firestore";
// import {
//   doc,
//   addDoc,
//   setDoc,
//   collection,
//   updateDoc,
//   deleteDoc,
//   onSnapshot,
//   query,
//   where,
//   orderBy,
//   // doc,
// } from "firebase/firestore";
// import { db } from "./index";



class App extends React.Component {
   constructor(){
     super();
     this.state = {
         products: [],
         loading:true
     }
     this.db = firebase.firestore(); // converting into a shortform
  }

  //function to change 
 async componentDidMount() {
  //this is a realtime listener if you change anything in firebase ui will automatically updated 
    //  const q = query(
    //    collection(db, "products"),
    //    where("price", ">", 0),
    //    orderBy("price")
    //  );
    //  const unsub = await onSnapshot(q, (querySnapshot) => {
    //    const getProducts = [];
    //    querySnapshot.forEach((doc) => {
    //      const product = doc.data();
    //      product.id = doc.id;
    //      getProducts.push(product);
    //    });
    //    console.log(getProducts);
    //    this.setState({ products: getProducts});
    //  });
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot)=>{
    //     console.log(snapshot);

    //   snapshot.docs.map((doc)=>{
    //     console.log(doc.data())
    //   })

    //   const products = snapshot.docs.map((doc)=>{
    //     const data = doc.data();
    //     data['id'] = doc.id;
    //     return data;
    //   })
       
    //   this.setState({
    //     products,
    //     loading:false
    //   })

    // })
      
      this.db
       .collection('products')
       .onSnapshot((snapshot)=>{ // onSnapshot updates atomatically for every change done in  firebase just like setState
        console.log(snapshot);

      snapshot.docs.map((doc)=>{
        console.log(doc.data())
      })

      const products = snapshot.docs.map((doc)=>{
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })
       
      this.setState({
        products,
        loading:false
      })

    })

   }

  handleIncreaseQuantity=(product)=>{
    console.log("Hey increase the quantity of ",product);
    const {products} = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;
    // this.setState({
    //    products: products  // change products of state from above to new products1 array formed
    // })
  

    // to register the change on firebase db the function has been altered
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
          .update({
            qty: products[index].qty + 1
          })
          .then(()=>{
            console.log('Updated Successfully');
          })
          .catch((error)=>{
            console.log('error:',error);
          })

  }
  handleDecreaseQuantity=(product)=>{
     console.log("Hey increase the quantity of ",product);
     const {products} = this.state;
     const index = products.indexOf(product);

     if(products[index].qty == 0){
         return;
     }

    //  products[index].qty -= 1;
    //  this.setState({
    //     products: products  // change products of state from above to new products1 array formed
    //  })

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
        .update({
          qty: products[index].qty - 1
        })
        .then(()=>{
          console.log("the quatity has been decreased")
        })
        .catch((error)=>{
          console.log('Error:',error)
        })
  }
  handleDeleteProduct = (id) =>{
    //  const {products} = this.state;
    //  // returns an array where item id is not involved
    //  const items = products.filter((item)=> item.id!=id);
   
    //  this.setState({
    //   products:items
    //  }) 
    const docRef = this.db.collection('products').doc(id);
    docRef
       .delete()
       .then(()=>{
         console.log('Deleted successfully')
       })
       .catch((error)=>{
         console.log('Error',error)
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


// adding product to firebase the docref gives the ref of the document it is getting added to
 addProduct = () => {
   this.db
          .collection('products')
          .add({
            title:'kettle',
            qty:32,
           price:1200,
           img:'https://www.ifbappliances.com/media/catalog/product/cache/f6d60de4095a6e5204f81c04aa5b766f/c/l/classic_kettle_pink_front_view_5.png'
          })
          .then((docRef)=>{
            console.log("Product has been added", docRef);
          })
          .catch((error)=>{
            console.log('Error:',error);
          })
 }

 render(){
  const {products,loading} = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <button onClick={this.addProduct} style={{ padding:20, fontSize:20}}>Add Product</button>
      <Cart 
        products={products} 
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteValue={this.handleDeleteProduct}
       />
       {loading && <h1>loading products ...</h1>}
       <div style={ { padding:10, fontSize:20 }}>
          TOTAL : {this.getCartTotal()}
       </div>
       {/* <POL /> */}
    </div>
  );
}
}
export default App;
