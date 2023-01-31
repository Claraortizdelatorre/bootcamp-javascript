import axios from "axios";
import * as Utils from "./utils";

function getAllCharacters(pagina) {
  console.log(pagina);
  return axios
    .get("https://rickandmortyapi.com/api/character/?page=" + pagina)
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => console.log("Se ha producido un error"));
}

/*
function getCharacterById(id) {
    console.log("el id que le paso" +id)
    return axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
           Utils.showCharacter(response);  
    }).catch(error => console.log("Se ha producido un error"));
}
*/
const getCharacterById = (character) => {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((res) => res.json())
    .then((data) => {
      Utils.showCharacter(data);
    });
};

export { getAllCharacters, getCharacterById };
