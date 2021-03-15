import React from 'react';

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

export default ImageGalleryItem;