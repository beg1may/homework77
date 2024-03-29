import axios from 'axios';
import {apiURL} from '../src/constants';

const axiosApi = axios.create({
    baseURL: apiURL,
})

export default axiosApi;