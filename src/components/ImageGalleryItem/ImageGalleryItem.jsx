import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => {
  const handleGetlargeURL = () => {
    onClick(largeImageURL);
  };

  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={webformatURL}
        alt="alt"
        onClick={handleGetlargeURL}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {};

export default ImageGalleryItem;
