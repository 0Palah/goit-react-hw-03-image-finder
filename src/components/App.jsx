import React, { Component } from 'react';
import css from './App.module.css';
import getFetchApi from './services/fetchApi';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    searchQuarry: '',
    page: 1,
    isLoading: false,
    showModal: false,
    error: null,
    modalImageURL: '',
    totalHits: null,
  };

  componentDidUpdate(_, prevState) {
    if (this.state.searchQuarry !== prevState.searchQuarry) {
      this.getFetchedImg();
    }
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({ images: [] });
    const { value } = evt.target.serchInput;
    this.setState({ searchQuarry: value, page: 1 });
  };

  getFetchedImg = async () => {
    this.setState({ isLoading: true });
    try {
      const { page, searchQuarry } = this.state;
      const response = await getFetchApi({
        page: page,
        searchQuarry: searchQuarry,
      });

      this.setState(prevState => ({
        images: [...prevState.images, ...response.hits],
        page: prevState.page + 1,
        totalHits: response.totalHits,
      }));
    } catch (err) {
      this.setState({ error: err });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleToggleModal = largeImageURL => {
    this.setState(({ showModal }) => ({
      modalImageURL: largeImageURL,
      showModal: !showModal,
    }));
  };

  render() {
    const { images, showModal, modalImageURL, totalHits, isLoading } =
      this.state;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          images={images}
          onClick={this.handleToggleModal}
        ></ImageGallery>
        {images.length < totalHits && (
          <Button onClick={this.getFetchedImg}></Button>
        )}
        {isLoading && <Loader />}
        {showModal && (
          <Modal imgUrl={modalImageURL} toggleModal={this.handleToggleModal} />
        )}
      </div>
    );
  }
}
