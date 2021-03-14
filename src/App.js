import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';

class App extends Component {
  state = {
    
  }

  onChangeQuery = query => {
    console.log(query);
  }
  render() {
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery}/>
      </>
    );
  }
}

export default App;