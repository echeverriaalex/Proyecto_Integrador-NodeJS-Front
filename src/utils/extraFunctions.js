import { getMoviesGenres, getMoviesbyGenrePaginated, getMovieDetailsByID } from "../axios/axios-movies";
import { getTvSeriesGenres, getTvbyGenrePaginated, getTvSerieDetailsByID } from "../axios/axios-tvseries";

export const extractYear = (dateString) => {
    if(dateString === undefined || dateString === null) return "N/A";
    dateString = dateString.trim().split("-");
    return dateString[0];
}

export const formatRuntime = (runtime) => {
    if(runtime === undefined || runtime === null) return "N/A";

    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    let formatted = "";

    if(hours > 0) {
        formatted += `${hours} h `;
    }

    if(minutes > 0) {
        formatted += `${minutes} min`;
    }

    return formatted.trim();
}

export const formatUserName = (username) => {
    if (username) {
        const trimmed = username.trim();
        if (!trimmed) return "";
        const capitalized = trimmed[0].toUpperCase() + trimmed.slice(1);
        return capitalized.length > 10 ? capitalized.slice(0, 10) + "..." : capitalized;
    }
}

export const formatRating = (rating) => {
    if(rating === undefined || rating === null) return "N/A";
    return rating.toFixed(2);
}

export const selectFetchGenreByType = (typeProduct) => {
    return typeProduct === "tvseries" ?
        getTvSeriesGenres: getMoviesGenres;
}

export const selectFetchGenreProductsByTypePaginated = (typeProduct) => {
    return typeProduct === "tvseries" ?
        getTvbyGenrePaginated : getMoviesbyGenrePaginated;
}

export const selectFetchDetailsProductsByType = (typeProduct) => {
    return typeProduct === "tvseries" ?
        getTvSerieDetailsByID : getMovieDetailsByID;
}