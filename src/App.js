import React, { Component } from 'react';

import apiServise from './components/services/apiService';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

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
    console.log(query);
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
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

  render() {
    const { hits, isLoading, error } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={hits} />
      </>
    );
  }
}

export default App;