import axios from "axios";
import { API_URL_ALL, API_URL_GENRES, API_URL_MOVIE, API_URL_MOVIES_PAGES, TOKEN } from "../utils/constants";

export const getAllMoviesFromAPI = async () => {
    try{
        const response = await axios.get(API_URL_ALL);
        return response.data;
    }
    catch(error){
        console.error("Error fetching movies:", error);
    }
};

export const getAllMoviesFromAPITMDB = async (page) => {
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
        console.error("Error fetching movies:", error);
    }
};

export const getMovieDetailsFromAPITMDB = async (id) => {
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
        console.error("Error fetching movies:", error);
    }
};

export const getGenresMoviesFromAPI = async () => {
    try{
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TOKEN}`
            }
        };
        const response = await axios.get(`${API_URL_GENRES}`, options);
        return response.data;
    }
    catch(error){
        console.error("Error fetching movies:", error);
    }
};

export const getMoviesbyGenreFromAPI = async (genres, page) => {
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