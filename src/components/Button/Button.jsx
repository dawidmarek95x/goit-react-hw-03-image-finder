import React from 'react';
import styles from './Button.module.scss';

export const Button = ({loadMore}) => {
  const {btn} = styles;

  return (
    <>
     <button 
      type="button" 
      className={btn} 
      onClick={loadMore}
    >
      Load more
    </button> 
    </>
  )
}