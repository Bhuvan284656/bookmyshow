import axios from "axios";

const url = "https://www.omdbapi.com/?apikey=8d9f24de";

export const movieList = (search = "Batman") => axios.get(`${url}&s=${search}`);

export const movie = id => axios.get(`${url}&i=${id}`);
