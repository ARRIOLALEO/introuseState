import React from "react";
class Counter extends React.Component{
    constructor(){
        super()
        this.state = {counter:0}
    }
    addOne = () =>{
        this.setState({counter:this.state.counter + 1})
    }
    render(){
        return(
            <>
            <h1>{this.state.counter}</h1>
            <button onClick={this.addOne}> add One</button>
            </>
        )
    }
}
export default Counter