import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import s from './ImageGallery.module.css';

const ImageGallery = ({ images, onClick }) => (
    <ul className={s.ImageGallery}>
        {images.map(image => (
            <ImageGalleryItem
                key={image.id}
                src={image.webformatURL}
                alt={image.tags}
                largeImageURL={image.largeImageURL}
                onClick={onClick}
            />))}
    </ul>
);

ImageGallery.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            webformatURL: PropTypes.string,
            tags: PropTypes.string,
            largeImageURL: PropTypes.string
        })
    ).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ImageGallery;