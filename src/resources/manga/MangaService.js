import axios from "axios";
import config from "../../config/config";

export default {
    getMangas: () => {
        return axios.get(`${config.baseURL}top/manga`)
    },

    getManga: (id) => {
        return axios.get(`${config.baseURL}manga/${id}`)
    },

    getRelatedManga: (id) => {
        return axios.get(`${config.baseURL}manga/${id}/relations`)
    },

    getSearchManga: (search, page) => {
        return axios.get(`${config.baseURL}manga?q=${search}&page${page}`)
    },

    getCategoryManga: (cat, page) => {
        return axios.get(`${config.baseURL}manga?genres=${cat}&page=${page}`)
    },

}