import axios from "axios";
import * as Utils from "./utils";

function getAllCharacters(pagina) {
  console.log(pagina);
  return axios
    .get("https://rickandmortyapi.com/api/character/?page=" + pagina)
    .then((response) => {
      console.log(response.data);
      return response.data.results;
      
    })
    .catch((error) => console.log("Se ha producido un error"));
}

function getCharacterById(id) {
    console.log("el id que le paso" +id)
    return axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
           Utils.showCharacter(response.data);  
           console.log(response.data);
    }).catch(error => console.log("Se ha producido un error"));
}

//recuperar n de pag
export { getAllCharacters, getCharacterById };
