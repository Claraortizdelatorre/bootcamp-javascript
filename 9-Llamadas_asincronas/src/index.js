import "./styles.css";
import * as DataBusiness from "./data-business";
import * as Utils from "./utils"

window.onload=() => {

    DataBusiness.getAllCharacters().then(datos => {
        console.log(datos);
        const users = datos;
        document.getElementById("root").innerText="";
        for (let user of users){
            console.log("ID" + user.id)
            const node = Utils.createCharacterRow(user);
            document.getElementById("root").append(node);     

            node.onclick = function(){

                DataBusiness.getSingleCharacter().then(datos2 => {
                   
                    console.log("entra en el click" + datos2);
                    const node = Utils.showCharacter(datos2);    
                    document.getElementById("root").append(node);
                    
                });
            };
        }
    })
}
