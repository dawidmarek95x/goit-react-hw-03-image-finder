import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import styles from './App.module.scss';
import { ImageGallery } from './ImageGallery/ImageGallery';
import fetchImagesWithQuery from 'services/fetchImagesWithQuery';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
  }

  setParams = (searchValue, pageNumber) => {
    this.setState({searchQuery: searchValue});
    this.setState({page: pageNumber});
  }

  componentDidUpdate = async () => {
    const {searchQuery, page} = this.state;
    const response = await fetchImagesWithQuery(searchQuery, page);
    const {hits} = response;
    this.setState({images: hits})
  }

  render() {
    const {app} = styles;
    const {images} = this.state;

    return (
      <div className={app}>
        <Searchbar setParams={this.setParams}/>
        {images.length > 0 && <ImageGallery items={images}/>}
      </div>
    );
  }
};

export default App;