import { Component } from "react";

class DropDown extends Component  {
  state = {
    visible: false,
  };
toggle =()=>{
    this.setState(prevState=>({
        visible:!prevState.visible,
    }))
}

  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        {this.state.visible && <div>Appeared menu</div>}
        
      </div>
    );
  }
}
export default DropDown;
