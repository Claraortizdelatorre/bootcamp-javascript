import "./styles.css";
import * as DataBusiness from "./data-business";
import * as Utils from "./utils"

window.onload=() => {

    DataBusiness.getAllCharacters().then(datos => {
        console.log(datos);
        const users = datos;
        document.getElementById("root").innerText="";
        for (let user of users){
            const node = Utils.createCharacterRow(user);
            document.getElementById("root").append(node);     
        }
    })
}
