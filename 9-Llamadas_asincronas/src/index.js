import "./styles.css";
import * as DataBusiness from "./data-business";
import * as Utils from "./utils";


window.onload=() => {
 
    var pag=0;

    let filter = document.getElementById('pagina');
 
    filter.onchange=function() {
     pag = document.getElementById('pagina').value;
   
    DataBusiness.getAllCharacters(pag).then(datos => {
       
        const users = datos;
        document.getElementById("root").innerText="";
        for (let user of users){
          //  console.log("ID" + user.id)
            const node = Utils.createCharacterRow(user);
            document.getElementById("root").append(node);     

            node.onclick = function(){
                DataBusiness.getSingleCharacter(user.id).then(datos2 => {
                    Utils.showCharacter(datos2)
                  
                 
                    const node = Utils.showCharacter(datos2);    
                    document.getElementById("root").append(node);
                    
                });
            };
        }
    })   
}
   
}

