import React, { Component } from 'react';

import apiServise from './components/services/apiService';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Spinner from './components/Loader/Loader';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: '',
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      hits: [],
      currentPage: 1,
      searchQuery: query,
      error: null
    });
  }

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { currentPage, searchQuery };
    
    this.setState({ isLoading: true });

    apiServise
      .fetchImages(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }))
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  onLoadMoreButtonClick = () => {
    this.fetchImages();
    setTimeout(function () {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 2000);
  }

  openModal = (e) => {
    e.preventDefault();
    const largeImageURL = e.target.dataset.source;
    console.log('url:', largeImageURL);

    this.setState({
      showModal: true,
      largeImageURL: largeImageURL,
    });
  }

  closeModal = (e) => {  
    if (e.currentTarget === e.target || e.code === 'Escape')
    this.setState({
      showModal: false,
      largeImageURL: '',
    });
  }

  render() {
    const { hits, isLoading, error, showModal, largeImageURL } = this.state;
    const shouldRenderLoadMoreButton = hits.length >= 12 && !isLoading;

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        {error && <h1>Oops... Something went wrong...</h1>}
        <ImageGallery images={hits} onClick={this.openModal} />
        {shouldRenderLoadMoreButton && (<Button onClick={this.onLoadMoreButtonClick} />)}
        {isLoading && (<Spinner />)}
        {showModal && (<Modal largeImageURL={largeImageURL} onClose={this.closeModal} />)}
      </>
    );
  }
}

export default App;