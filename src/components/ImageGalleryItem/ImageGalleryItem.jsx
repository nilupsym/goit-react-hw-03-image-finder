import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({src, alt, largeImageURL, onClick}) => (
    <li className={s.ImageGalleryItem}>
        <img
            onClick={onClick}
            src={src}
            alt={alt}
            className={s.ImageGalleryItemImage}
            data-source={largeImageURL} />
    </li>
);

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;