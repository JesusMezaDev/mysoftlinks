import axios from 'axios';

export const linksApi = axios.create({
    baseURL: `${ import.meta.env.MY_API_URL }/api`,
});