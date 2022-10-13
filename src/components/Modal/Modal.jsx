import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlePressEsc);
  }

  //   componentDidUpdate() {}

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressEsc);
  }

  handlePressEsc = evt => {
    if (evt.code === 'Escape') this.props.toggleModal();
  };

  handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) this.props.toggleModal();
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          <img src={this.props.imgUrl} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  imgUrl: PropTypes.string,
  toggleModal: PropTypes.func,
};
