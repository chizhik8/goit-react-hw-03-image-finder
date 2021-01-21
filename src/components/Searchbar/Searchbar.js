
import React, { Component } from 'react'
import '../../index.css'
// import PropTypes from 'prop-types'

export class Searchbar extends Component {
  // static propTypes = {}

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )
  }
}

export default Searchbar

// Компонент принимает один проп onSubmit - функцию для передачи значения инпута при сабмите формы. 
// Создает DOM - элемент следующей структуры.


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const fetchImages = (query, page, key) => { 
//     const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${key}`;
//     return fetch(URL).then(response => {
//         if (response.status === 200) { return response.json() }
//     }).then(data => {
//         return data.hits;
//     }).catch(err => console.log('Error:', err));
    
// };

// export default fetchImages






// !!!!!!!!!!!!!!!!!!!!!!!!
// const API_KEY = '19548879-107cb87ae385e6159bb9744cd';
// let inputValue;
// let page = 1;

// fetchImages('cow', 2, API_KEY);

// refs.form.addEventListener('submit', getFormSubmit);

// function getFormSubmit(event) {
//     event.preventDefault();
//     inputValue = event.target.elements.query.value;    
//     refs.gallery.innerHTML = '';
//     event.target.reset();
//     if (inputValue.length > 1) {
//         page = 1;
//         fetchImages(inputValue, page, API_KEY)
//             .then(img => {
//                 if (img.length) {
//                     addImg(img);
//                     page += 1;
//                     // refs.button.className = 'show';
//                     refs.button.style.display = 'block'
//                 } else {
//                     refs.button.style.display = 'none';
//                     alert('Not Found!');
//                 };
                
//             }).catch(err => console.log('Error:', err));
        
//     };
    
// }