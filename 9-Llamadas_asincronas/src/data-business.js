import axios from 'axios';

function getAllCharacters() {
   return axios
    .get("https://rickandmortyapi.com/api/character")
    .then(response => {
        return response.data.results; 
    })
    .catch(error => console.log("Se ha producido un error"));
}

export {getAllCharacters}