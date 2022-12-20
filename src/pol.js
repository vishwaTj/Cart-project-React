import React from "react";
class pol extends React.Component{
    constructor(){
        super();
        this.state={
            myName: "CN"
        }
    }
    render(){
        let code = ["Java","ES6","Ruby"];
            return (
               <div>
                  {code.map(item => <p>{item}</p>)}
               </div>
         )
    }
 }
 export default pol;