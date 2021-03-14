import React, { Component } from 'react';

import apiServise from './components/services/apiService';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null
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

  render() {
    const { hits, isLoading, error } = this.state;
    const shouldRenderLoadMoreButton = hits.length >= 12 && !isLoading;

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={hits} />
        {shouldRenderLoadMoreButton && (<Button onClick={this.onLoadMoreButtonClick} />)}
      </>
    );
  }
}

export default App;