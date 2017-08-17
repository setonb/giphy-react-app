import axios from 'axios';

const API_KEY = '?api_key=1b98ddd459ea4a2ebbe3460dfa32dd64';
const ROOT_URL = 'http://api.giphy.com/v1/gifs/'

export function giphySearch(term) {
    const REQUEST_URL = `${ROOT_URL}search${API_KEY}&q=${term}&limit=20`;
    const request = axios.get(REQUEST_URL);

    return {
        type: 'GIPHY_SEARCH',
        payload: request
    }
}

export function updateHistory(term) {
    return {
        type: 'UPDATE_HISTORY',
        payload: term
    }
}

export function giphyTrending() {
    const REQUEST_URL = `${ROOT_URL}trending${API_KEY}&limit=20`;
    const request = axios.get(REQUEST_URL);

    return {
        type: 'GIPHY_TRENDING',
        payload: request
    }
}