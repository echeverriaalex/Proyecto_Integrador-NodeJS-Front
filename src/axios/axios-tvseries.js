import axios from "axios";
import { API_URL_TV, API_URL_TV_GENRES, API_URL_TV_PAGES, TOKEN } from "../utils/constants";

export const getTvSeriesByPage = async (page) => {
    try{
        const options = {
            method: 'GET',
            //url: 'https://api.themoviedb.org/3/authentication',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TOKEN}`
            }
        };
        const response = await axios.get(`${API_URL_TV_PAGES}?page=${page}`, options);
        return response.data;
    }
    catch(error){
        console.error("Error fetching Tv series from API ", error);
    }
};

export const getTvSerieDetailsByID = async (id) => {
    try{
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TOKEN}`
            }
        };
        const response = await axios.get(`${API_URL_TV}/${id}`, options);
        return response.data;
    }
    catch(error){
        console.error("Error fetching Tv series from API by ID ", error);
    }
};

export const getTvSeriesGenres = async () => {
    try{
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TOKEN}`
            }
        };
        const response = await axios.get(`${API_URL_TV_GENRES}`, options);
        return response.data;
    }
    catch(error){
        console.error("Error fetching Tv series:", error);
    }
};

export const getTvbyGenrePaginated = async (genres, page) => {
    try{
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TOKEN}`
            }
        };
        const response = await axios.get(`${API_URL_TV_PAGES}?with_genres=${genres}&page=${page}`, options);
        return response.data;
    }
    catch(error){
        console.error("Error fetching tv shows:", error);
    }
};