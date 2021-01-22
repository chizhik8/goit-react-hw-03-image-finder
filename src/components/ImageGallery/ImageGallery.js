import React from 'react';
import '../../index.css'

export default function ImageGallery({images, onClick}) {
  return (
      <ul className="ImageGallery">
        {images.map(image => (
          <li key={image.id} className="ImageGalleryItem">
            <img
            onClick={onClick}
            name={image.largeImageURL}
            src={image.webformatURL}
            alt={image.tags}
            width={image.webformatWidth}
            height={image.webformatHeight}
            className="ImageGalleryItem-image" />
          </li>))}
      </ul>
  )
}
