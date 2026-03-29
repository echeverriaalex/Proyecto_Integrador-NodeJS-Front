import axios from "axios";
import { API_URL_MOVIE, API_URL_MOVIES_GENRES, API_URL_MOVIES_PAGES, API_URL_SEARCH, TOKEN } from "../utils/constants";
import { getTvSeriesGenres } from "./axios-tvseries";
import { getMoviesGenres } from "./axios-movies";

export const searchProductByQuery = async (query) => {
    try{
        const options = {
            method: 'GET',
            //url: 'https://api.themoviedb.org/3/authentication',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TOKEN}`
            }
        };
        const response = await axios.get(`${API_URL_SEARCH}?query=${query}`, options);
        return response.data;
        //return response;
    }
    catch(error){
        console.error("Error fetching movies from API ", error);
    }
};

export const searchProductByQueryPaginated = async (query, page) => {
    try{
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TOKEN}`
            }
        };
        //const response = await axios.get(`${API_URL_MOVIES_PAGES}?with_genres=${genres}&page=${page}`, options);
        const response = await axios.get(`${API_URL_SEARCH}?query=${query}&page=${page}`, options);
        return response.data;
    }
    catch(error){
        console.error("Error fetching movies:", error);
    }
};


export const searchGenreByTypeAndID = async (type, idGenre) => {

    const  typeProduct = type === "movie" ? "movies" : "tvseries";

    try{
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TOKEN}`
            }
        };


        const genresList = typeProduct === "movies" ? await getMoviesGenres() : await getTvSeriesGenres();


        console.log("Genres list in search axios --> ", genresList);
        


        //const response = await axios.get(`${API_URL_MOVIES_PAGES}?with_genres=${genres}&page=${page}`, options);
        //const response = await axios.get(`${API_URL_SEARCH}?query=${query}&page=${page}`, options);
        
        //return response.data;
    }
    catch(error){
        console.error("Error fetching movies:", error);
    }
};