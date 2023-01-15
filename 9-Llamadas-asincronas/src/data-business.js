import axios from "axios";

function getAllCharacters() {
    return axios
        .get("https://www.breakingbadapi.com/api/characters")
        .then( response => {
            return response.data;
        });
}

function getSingleCharacter() {
    return axios
        .get("https://www.breakingbadapi.com/api/characters/{char_id}")
        .then(response => {
            return response.data;
        });
}

function getQuote() {
    return axios
        .get("https://www.breakingbadapi.com/api/quotes")
        .then(response => {
            return response.data;
        });
}

export { getAllCharacters, getSingleCharacter, getQuote };