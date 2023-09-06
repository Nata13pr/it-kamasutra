import { Component } from "react";

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx=index=>{
    this.setState({activeOptionIdx:index})
  }

  makeOptionClassNem = (index) => {
  
    const optionClasses = ["ColorPicker__option"];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push("ColorPicker__option--active");
    }
  
    return optionClasses.join(" ");
  };

  render() {
    const {label}=this.props.options[this.state.activeOptionIdx];
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Chosen color : {label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassNem(index)}
              style={{ backgroundColor: color }}
              onClick={()=>this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
export default ColorPicker;
