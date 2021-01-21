import React from 'react';
import '../../index.css'

export default function ImageGallery({images}) {
  return (
      <ul className="ImageGallery">
        {images.map(image => (
          <li key={image.id} className="ImageGalleryItem">
            <img
            src={image.webformatURL}
            alt={image.tags}
            width={image.webformatWidth}
            height={image.webformatHeight}
            className="ImageGalleryItem-image" />
          </li>))}
      </ul>
  )
}
