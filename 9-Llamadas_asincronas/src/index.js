import "./styles.css";
import * as DataBusiness from "./data-business";
import * as Utils from "./utils";


window.onload=() => {
 
    var pag=1;
    getPagCharacters(pag);

    let filter = document.getElementById('pagina');

    filter.onchange=function() { //cargar personajes de la pagína seleccionada
        pag = document.getElementById('pagina').value;
        getPagCharacters(pag);
    }  
}


/*obtener personajes*/
function getPagCharacters(pag){

    DataBusiness.getAllCharacters(pag).then(datos => {
   
        const users = datos;
        document.getElementById("root").innerText="";
        for (let user of users){
          //  console.log("ID" + user.id)
        //  console.log("usuariosssss" + user)
            const node = Utils.createCharacterRow(user);
            document.getElementById("root").append(node);     

            node.onclick = function(){

                   
                DataBusiness.getCharacterById(user.id);

            
            };
        }
    })   
    
}