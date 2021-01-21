import axios from 'axios'

const fetchImagesWithQuery = (searchQuery, page) => {
    const key = '19548879-107cb87ae385e6159bb9744cd';
    return axios
        .get(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${key}`)
        .then(response => response.data.hits);
};

export default { fetchImagesWithQuery };