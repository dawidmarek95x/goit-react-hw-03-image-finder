import React from 'react';
import styles from './ImageGalleryItem.module.scss';

export const ImageGalleryItem = ({src, alt}) => {
  const {item,  item_image} = styles;

  return (
    <li className={item}>
      <img className={item_image} src={src} alt={alt} />
    </li>
  )
}