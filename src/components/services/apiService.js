import axios from 'axios';

const API_KEY = '19813878-66abafb147b791a25f56ab6fb';
const BASE_URL = 'https://pixabay.com/api';

const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
    return axios
        .get(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${currentPage}&per_page=${pageSize}&key=${API_KEY}`)
        .then(response => response.data.hits);
};

export default { fetchImages };