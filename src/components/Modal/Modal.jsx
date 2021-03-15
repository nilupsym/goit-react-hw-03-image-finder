import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  state = {}

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

 handleKeyDown = e => {
   if (e.code === 'Escape') {
     this.props.onClose(e);
   }
 };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose(e);
    }
  };

  render() {
  return createPortal(
    <div onClick={this.props.onClose} className={s.Overlay}>
      <div className={s.Modal}>
        <img src={this.props.largeImageURL} alt={this.props.tags} />
      </div>
    </div>,
    modalRoot);
  }
}

