import React, { Component } from 'react'

import { Searchbar } from './components/Searchbar/Searchbar';
import LoaderBall from './components/LoaderBall/LoaderBall';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';

import imagesApi  from './services/imagesApi';

export class App extends Component {
  // static defaultProps = { query: 'cow'}
  // static defaultProps = { query: 'cow'}


  state = {
    images: [],
    loading: false,
    error: null,
  }

  componentDidMount() { 
    // console.log('componentDidMount');
    // this.setState({ loading: true });
  };
  
  componentDidUpdate() { 
    // console.log('componentDidUpdate');
  };

  fetchImages = query => { 
    imagesApi.fetchImagesWithQuery(query)
      .then(images => this.setState({ images }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }


  render() {
    const { images, loading, error } = this.state;
    
    return (
      <div>
        <Searchbar onSubmit={this.fetchImages}/>
        {error && <p>Wrong: {error.message}</p>}
        {loading && <LoaderBall/>}
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length > 0 && <Button />}
      </div>
    )
  }
}

export default App

