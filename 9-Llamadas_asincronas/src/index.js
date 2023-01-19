import "./styles.css";
import * as DataBusiness from "./data-business";
import * as Utils from "./utils"



DataBusiness.getAllCharacters().then(datos => {
    //document.getElementById("root").innerText = "";
    const users = datos;
    const nodes = []

    for (let user of users){
       // console.log(user);
        const node = Utils.createCharacterRow(user);
        nodes.push(node);
    }
    for(let node of nodes){
        document.getElementById("root").append(node);
    }
})