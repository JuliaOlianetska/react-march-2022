import axios from 'axios';
import {baseURL} from '../constasns';

const axiosService = axios.create({baseURL});

export {axiosService};
