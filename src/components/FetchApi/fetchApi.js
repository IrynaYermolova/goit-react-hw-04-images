import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';
axios.defaults.params = {
  key: '34672981-adcb403f6d383b7a43bf0da18',
  per_page: 12,
};

const fetchImages = (value, page = 1) => {
  return axios
    .get('api/', {
      params: {
        q: value,
        page,
      },
    })
    .then(data => data);
};

export default fetchImages;

