import React from "react"
import Controls from "./Controls"

class Counter extends React.Component{
    static defaultProps={
        initialValue:0,
    }
   
    state={
        value:this.props.initialValue,
    }

    handleIncrement=()=>{
        this.setState(prevState=>({
            value:prevState.value+1,
        }))
    }
    handledecrement=()=>{
        this.setState(prevState=>({
            value:prevState.value-1,
        }))
    }
    render (){
        
        return(
            <div>
                <span>{this.state.value}</span>

               <Controls onDecrement={this.handledecrement} onIncrement={this.handleIncrement}/>
            </div>
        )
    }
}
export default Counter;