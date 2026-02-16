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
        let name = username.trim().split(" ")[0]; // Obtener el primer nombre
        name = name.charAt(0).toUpperCase() + name.slice(1); // Capitalizar la primera letra
        return name.length > 10 ? name.slice(0, 10) + "..." : name;
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