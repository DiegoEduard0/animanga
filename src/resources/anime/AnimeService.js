import axios from "axios";
import config from "../../config/config";

export default {
    getAnimes: () => {
        return axios.get(`${config.baseURL}seasons/now`)
    },

    getAnime: (id) => {
        return axios.get(`${config.baseURL}anime/${id}`)
    },

    getRelatedAnime: (id) => {
        return axios.get(`${config.baseURL}anime/${id}/relations`)
    },

    getSearchAnime: (search, page) => {
        return axios.get(`${config.baseURL}anime?q=${search}&page${page}`)
    },

    getCategoryAnime: (cat, page) => {
        return axios.get(`${config.baseURL}anime?genres=${cat}&page=${page}`)
    },

}