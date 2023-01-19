import axios from 'axios';

function getAllCharacters() {
   return axios
    .get("https://www.breakingbadapi.com/api/characters")
    .then(response => {
        return response.data; 
    })
    .then(data => console.log(data))
    .catch(error => console.log("Se ha producido un error"));
}

export {getAllCharacters}