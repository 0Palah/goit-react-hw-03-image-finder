import React, { Component } from 'react';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchQuarry: '',
  };
  handleSubmit = evt => {
    evt.preventDefault();
    const { value } = evt.target.serchInput;
    this.setState({ searchQuarry: value });
    console.log(value);
  };
  render() {
    return (
      <div
        className={css.App}
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery />
      </div>
    );
  }
}