import React from 'react';
import styles from './ImageGallery.module.scss';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({items}) => {
  const {gallery} = styles;

  return (
    <ul className={gallery}>
      {items.map(({id, webformatURL, tags}) => <ImageGalleryItem key={id} src={webformatURL} alt={tags} />)}
    </ul>
  )
}

export default ImageGallery;

