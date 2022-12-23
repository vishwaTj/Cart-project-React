import React from "react";
class pol extends React.Component{
    constructor(){
        super();
        this.state={
            number: 1
        }
    }
    handleClick = () => {
        this.setState({ number: 2 }, () => console.log(this.state.number));
        this.setState({ number: 3 }, () => console.log(this.state.number));
    }

    render(){
        let code = ["Java","ES6","Ruby"];
            return (
               <div>
                <button onClick={this.handleClick()}>h</button> 
                  {/* {code.map(item => <p>{this.state.number}</p>)} */}
               </div>
         )
    }
 }

 export default pol;