import axios from 'axios';


function getAllCharacters(pagina) {
   console.log(pagina)
   return axios
    .get("https://rickandmortyapi.com/api/character/?page="+pagina)
    .then(response => {
        return response.data.results; 
    })
    .catch(error => console.log("Se ha producido un error"));
}

function getSingleCharacter(id) {
    console.log("el id que le paso" +id)
    return axios
        .get("https://rickandmortyapi.com/api/character/", {id})
        .then(response => {
            console.log("respuesta primera " + response)
            
            response.data.results.map(item=>{
                console.log(item.name)
            })
            return response.data.results.name;
    })
        .catch(error => console.log("Se ha producido un error"));
}


export {getAllCharacters, getSingleCharacter}