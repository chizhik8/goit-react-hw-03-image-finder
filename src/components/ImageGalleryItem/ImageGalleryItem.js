import React, { Component } from 'react'
import '../../index.css'
// import PropTypes from 'prop-types'

export class ImageGalleryItem extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <li className="ImageGalleryItem">
                    <img src="" alt="" className="ImageGalleryItem-image" />
                </li>
            </div>
        )
    }
}

export default ImageGalleryItem



// Компонент элемента списка с изображением. Создает DOM-элемент следующей структуры.
// !!!!!!!!!!!!!!!!!!!!! <img src="{{webformatURL}}" alt="{{tags}}" width="{{webformatWidth}}" height="{{webformatHeight}}" />
