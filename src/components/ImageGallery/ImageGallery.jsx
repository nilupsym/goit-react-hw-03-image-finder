import React from 'react';

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

export default ImageGallery;