import { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    tag: "",
    experience:'junior',
    licence:false,
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
   

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", tag: "" });
  };

handleLicenceChange=e=>{
    console.log(e.currentTarget.checked);

    this.setState({licence:e.currentTarget.checked})
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input 
          name="name" 
          type="text" 
          onChange={this.handleChange} 
          value={this.state.name}></input>
        </label>
        <label>
          Nickname
          <input 
          type="text" 
          name="tag" 
          onChange={this.handleChange} 
          value={this.state.tag}></input>
        </label>
        

        <p>Your level :</p>
        <label><input type='radio' name='experience' value='junior' onChange={this.handleChange} checked={this.state.experience==='junior'}></input></label>
        <label><input type='radio' name='experience' value='middle' onChange={this.handleChange} checked={this.state.experience==='middle'}></input></label>
        <label><input type='radio' name='experience' value='senior' onChange={this.handleChange} checked={this.state.experience==='senior'}></input></label>
      
      <label><input
      type='checkbox'
      name='licence'
      checked={this.state.licence}
      onChange={this.handleLicenceChange}
      />Agreed</label>
      <button type="submit" disabled={!this.state.licence}>Send</button>
      </form>
    );
  }
}
export default Form;
