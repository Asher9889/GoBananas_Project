import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN_KEY,
}

const fetchDataFromApi = async (url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {
        headers: headers,
        params: params,
        })

        return data;
    } catch (error) {
        console.log("Some Error Caught During Axios Call" + error)
    }
}


export default fetchDataFromApi ;