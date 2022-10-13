import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul className={css.ImageGallery}>
        {' '}
        {images.map(el => {
          return (
            <ImageGalleryItem
              key={el.webformatURL}
              webformatURL={el.webformatURL}
              largeImageURL={el.largeImageURL}
            />
          );
        })}
      </ul>
    );
  }
}

ImageGallery.propTypes = {};
