import "./styles.css";
import * as DataBusiness from "./data-business";
import * as Utils from "./utils"

window.onload=() => {

    DataBusiness.getAllCharacters().then(datos => {
        const nodebad = []
        console.log(datos);
        const users = datos;
        document.getElementById("root").innerText="";
        for (let user of users){
            console.log("ID" + user.id)
            const node = Utils.createCharacterRow(user);
            document.getElementById("root").append(node);     




            node.onclick = function(){
                DataBusiness.getSingleCharacter(user.id).then(datos2 => {
                   // document.getElementById("root").innerText="";
                    console.log("entra en el click" + datos2);
                    const node = Utils.showCharacter(datos2);    
                    document.getElementById("root").append(node);
                    
                });

              //  nodebad.push(node);
            };
         
           // nodebad.push(node);
            
        }
    })



    
}
