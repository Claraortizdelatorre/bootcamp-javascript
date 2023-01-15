import "./styles.css"

import * as DataBusiness from "./data-business";
import * as Utils from "./utils";

DataBusiness.getCharacters().then(characters => {
    

    const nodes = [];

    for (let character of characters) {
        const node = Utils.createCharacterRow(character);
        
     /*   node.onclick = function () {
            Utils.showCharacter(character);
        }*/

        nodes.push(node);
    }

    for (let node of nodes) {
        document.getElementById("root").append(node);
    }
})


/*
DataBusiness.getQuote().then(quotes => {
    document.getElementById("quotes").innerText = "";

    const quoteNodes = [];

    for (let quote of quotes) {
        const quoteNode = Utils.createQuoteRow(quote);
        quoteNodes.push(quoteNode);
    }

    for (let quoteNode of quoteNodes) {
        document.getElementById("quotes").append(quoteNode);
    }
})*/