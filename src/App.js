import React, { Component } from 'react'
import axios from 'axios'

import { Searchbar } from './components/Searchbar/Searchbar';
import LoaderBall from './components/LoaderBall/LoaderBall';


// import ImageGallery from './components/ImageGallery/ImageGallery';
// import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
// import Button from './components/Button/Button';
// import PropTypes from 'prop-types'

export class App extends Component {
  // static propTypes = { }

  state = {
    images: [],
    query: '',
    loading: false,
    error: null,
  }

  componentDidMount() { 
    console.log('componentDidMount');

    this.setState({
      loading: true,
    });

    const key = '19548879-107cb87ae385e6159bb9744cd';
    let query = 'winter';
    let page = 1;


    axios.get(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${key}`)
      .then(response => this.setState({images: response.data.hits}))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({loading: false}))
  };
  
  componentDidUpdate() { 
    console.log('componentDidUpdate');
  };


  render() {
    const {images, loading, error} = this.state;
    
    return (
      <div>
        <Searchbar />
        {error && <p>Wrong: {error.message}</p>}
        {loading && <LoaderBall/>}
        {images.length > 0 && 
          (<ul className="ImageGallery">
            {this.state.images.map(image => (
              <li className="ImageGalleryItem">
                <img
                src={image.webformatURL}
                alt={image.tags}
                width={image.webformatWidth}
                height={image.webformatHeight}
                className="ImageGalleryItem-image" />
              </li> ))}
           </ul>)}
        {/* <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        <Button /> */}
      </div>
    )
  }
}

export default App
