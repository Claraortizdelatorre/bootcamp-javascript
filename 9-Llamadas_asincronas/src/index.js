import "./styles.css";
import * as DataBusiness from "./data-business";
import * as Utils from "./utils";


window.onload=() => {
 
      jsFunction(1);
    DataBusiness.getAllCharacters().then(datos => {
       // console.log(datos);
        const users = datos;
        document.getElementById("root").innerText="";
        for (let user of users){
          //  console.log("ID" + user.id)
            const node = Utils.createCharacterRow(user);
            document.getElementById("root").append(node);     

           /* node.onclick = function(){

                DataBusiness.getSingleCharacter(user.id).then(datos2 => {

                   datos2.map(item=>{
                        Utils.showCharacter(item)
                    })

                 
                   
                 
                    const node = Utils.showCharacter(datos2);    
                    document.getElementById("root").append(node);
                    
                });
            };*/
        }
    })   

   
}

function jsFunction(pagina){
    // var myselect = document.getElementById("pagina");
     return console.log("pagina" + pagina);
   }


jsFunction(1);