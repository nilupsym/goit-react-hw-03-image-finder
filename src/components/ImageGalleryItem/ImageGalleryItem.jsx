import React from 'react';

import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({src, alt}) => (
    <li className={s.ImageGalleryItem}>
        <img
            src={src}
            alt={alt}
            className={s.ImageGalleryItemImage} />
    </li>
);

export default ImageGalleryItem;