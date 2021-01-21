import React from 'react'

export default function Button() {
    return (
        <div className="ButtonContainer">
            <button type='button' className="Button">Load more</button>
        </div>
    )
}



// При нажатии на кнопку Load more должна догружаться следующая порция изображений и рендериться вместе с предыдущими.
// После загрузки и рендера новой партии изображений страница должна плавно скролиться.Для скрола используй следующий код.

// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });

// Кнопка должна рендерится только тогда, когда есть какие-то загруженные изобаржения. 
// Если массив изображений пуст, кнопка не рендерится.

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function loadImg() {

//     fetchImages(inputValue, page, API_KEY)
//         .then(img => {
//             addImg(img);
//             page += 1;
//             window.scrollTo({
//                 top: document.documentElement.offsetHeight - 2935,
//                 behavior: 'smooth'
//             });  
//         }).catch(err => console.log('Error:', err));

// }