import { Component } from "react";
import shortid from "shortid";

class TodoEditor extends Component {
  state = {
    message: "",
  };

  handleMessage = (e) => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleMessage}
        ></textarea>
        <button type="submit">Save</button>
      </form>
    );
  }
}
export default TodoEditor;
