import axios from 'axios';

const pixabayApi = axios.create({
  baseURL: 'https://pixabay.com/',
});

export const getFetchApi = async ({ page = 1, searchQuarry = '' }) => {
  const data = await pixabayApi.get('api/', {
    params: {
      page: page,
      q: searchQuarry,
      key: '29947869-2a9890512044a26cd8ce610c4',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  console.log(data);
  return data;
};
