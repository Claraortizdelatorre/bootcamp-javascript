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
            data.results.map(item=>{
                consol
            })
            return response.data.results.name;
    })
        .catch(error => console.log("Se ha producido un error"));
}


function jsFunction(){
    var myselect = document.getElementById("pagina");
    alert(myselect.options[myselect.selectedIndex].value);
  }

  
export {getAllCharacters, getSingleCharacter}