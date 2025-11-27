import axios from "axios";
import { API_URL_MOVIE, API_URL_MOVIES_GENRES, API_URL_MOVIES_PAGES, TOKEN } from "../utils/constants";

export const getMoviesByPage = async (page) => {
    try{
        const options = {
            method: 'GET',
            //url: 'https://api.themoviedb.org/3/authentication',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TOKEN}`
            }
        };
        const response = await axios.get(`${API_URL_MOVIES_PAGES}?page=${page}`, options);
        return response.data;
    }
    catch(error){
        console.error("Error fetching movies from API ", error);
    }
};

export const getMovieDetailsByID = async (id) => {
    try{
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TOKEN}`
            }
        };
        const response = await axios.get(`${API_URL_MOVIE}/${id}`, options);
        return response.data;
    }
    catch(error){
        console.error("Error fetching movies from API by ID ", error);
    }
};

export const getMoviesGenres = async () => {
    try{
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TOKEN}`
            }
        };
        const response = await axios.get(`${API_URL_MOVIES_GENRES}`, options);
        return response.data;
    }
    catch(error){
        console.error("Error fetching movies from API genres", error);
    }
};

export const getMoviesbyGenrePaginated = async (genres, page) => {
    try{
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TOKEN}`
            }
        };
        const response = await axios.get(`${API_URL_MOVIES_PAGES}?with_genres=${genres}&page=${page}`, options);
        return response.data;
    }
    catch(error){
        console.error("Error fetching movies:", error);
    }
};