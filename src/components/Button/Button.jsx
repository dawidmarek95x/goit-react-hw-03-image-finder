import React from 'react';
import styles from './Button.module.scss';

export const Button = () => {
  const {btn} = styles;

  // handleClick = (evt) => {
  //   this.props.setParams()
  // }

  return (
    <>
     <button 
      type="button" 
      className={btn} 
      onClick={this.handleClick}
    >
      Load more
    </button> 
    </>
  )
}