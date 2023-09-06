import { Component } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    console.log(" Modal componentDidMount");

    window.addEventListener("keydown", (e) =>{
      console.log(e.code);
      if (e.code === 'Escape') {
        console.log("Pressed Escape");

        this.props.onClose();
      }
    });
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return createPortal(
      <div className="Modal__backdrop">
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
