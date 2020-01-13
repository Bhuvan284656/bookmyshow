import axios from "axios";

const url = "https://www.omdbapi.com/?page=2&apikey=8d9f24de";

//Get Movie List by searching Key word
export const movieList = (search="Batman") => axios.get(`${url}&s=${search}`);

//Get Movie Data by movie ID
export const movie = (id) => axios.get(`${url}&i=${id}`);