import React, { Component } from 'react';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { getFetchApi } from './services/fetchApi';

export class App extends Component {
  state = {
    searchQuarry: '',
    isLoading: false,
    page: 1,
  };

  componentDidUpdate(_, prevState) {
    if (this.state.searchQuarry !== prevState.searchQuarry) {
      this.getFetchedImg();
    }
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const { value } = evt.target.serchInput;
    this.setState({ searchQuarry: value });
    console.log(value);
  };

  getFetchedImg = async () => {
    this.setState({ isLoading: true });
    try {
      const { page, searchQuarry } = this.state;
      const response = await getFetchApi({
        page: page,
        searchQuarry: searchQuarry,
      });
      // console.log(response);
    } catch (err) {
      console.log(err);
    }
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
