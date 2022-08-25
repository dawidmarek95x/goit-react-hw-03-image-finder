import React from 'react';
import styles from './ImageGallery.module.scss';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';

export const ImageGallery = ({items}) => {
  const {gallery} = styles;

  return (
    <ul className={gallery}>
      {items.map(({webformatURL, tags}) => <ImageGalleryItem key={nanoid()} src={webformatURL} alt={tags} />)}
    </ul>
  )
}

export default ImageGallery;

