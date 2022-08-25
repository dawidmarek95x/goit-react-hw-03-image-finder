import React, { Component } from 'react';
import styles from './App.module.scss';
import * as api from 'services/fetchImagesWithQuery';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    isLoading: false,
    error: '',
  }

  setInitialParams = (searchQuery) => {
    if (searchQuery === '') {
      return alert('Enter the search value!')
    }

    if (searchQuery === this.state.searchQuery) {
      return;
    }

    this.setState({
      images: [],
      searchQuery,
      page: 1,
    });
  }

  addImages = async (searchQuery, page) => {
    try {
      this.setState({ isLoading: true });
      const newImages = await api.fetchImagesWithQuery(searchQuery, page);

      this.setState(oldState => ({
        images: [...oldState.images, ...newImages],
      }));
    } catch (error) {
      this.setState({error: error.message})
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page || prevState.searchQuery !== this.state.searchQuery) {
      const {searchQuery, page} = this.state;
      this.addImages(searchQuery, page);
    }
  }

  render() {
    const {app} = styles;
    const {images} = this.state;

    return (
      <div className={app}>
        <Searchbar onSubmit={this.setInitialParams}/>
        {images.length > 0 && <ImageGallery items={images} />} 
      </div>
    );
  }
};

export default App;