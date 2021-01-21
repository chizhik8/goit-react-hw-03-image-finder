import React, { Component } from 'react'

import { Searchbar } from './components/Searchbar/Searchbar';
import LoaderBall from './components/LoaderBall/LoaderBall';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';

import imagesApi  from './services/imagesApi';
import Modal from './components/Modal/Modal';

export class App extends Component {

  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: '',
    page: 1,
    largeImageURL: '',
  }
  
  componentDidUpdate( prevProps, prevState ) { 
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
    
    window.scrollTo({top: document.documentElement.scrollHeight,behavior: 'smooth',});

  };

  fetchImages = () => { 
    const { searchQuery, page } = this.state;
    this.setState({loading: true});
    imagesApi.fetchImagesWithQuery(searchQuery, page)
      .then(images =>
        this.setState(prevState => ({ images: [...prevState.images, ...images], page: prevState.page + 1 })))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  handleSearchFormsSubmit = query => { 
    this.setState({ searchQuery: query, page: 1, images: [] });
  }

  handleModal = url => { 
    this.setState({largeImageURL: url})
  }

  render() {
    const { images, loading, error, largeImageURL } = this.state;
    
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchFormsSubmit}/>
        {error && <p>Wrong: {error.message}</p>}
        {loading && <LoaderBall/>}
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length > 0 && !loading && <Button onClick={this.fetchImages} />}
        {largeImageURL && <Modal  />}
      </div>
    )
  }
}

export default App

