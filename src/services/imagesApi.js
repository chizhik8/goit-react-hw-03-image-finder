import axios from 'axios'

const fetchImagesWithQuery = query => {
    const key = '19548879-107cb87ae385e6159bb9744cd';
    let page = 1;

    return axios
        .get(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${key}`)
        .then(response => response.data.hits);
};

export default { fetchImagesWithQuery };