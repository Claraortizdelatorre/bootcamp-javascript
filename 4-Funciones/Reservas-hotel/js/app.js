var nights = () => parseInt(document.getElementById("number-nights").value);

function rate(){
    let select_type = document.getElementById('room-type-input').value;
    switch(select_type){
        case "standard":
            return 100;
        case "junior":
            return 120;
        case "suite":
            return 150;
    }
}

function spa(){

    if (document.getElementById("checkbox-spa").checked){
        return 20;
    }else{
        return 0;
    }
}

function room_occupation(){
    let total_spa_rate = rate() + spa();
    var select_room = document.getElementById('room-input').value;
    
    switch(select_room){
        case 'individual': 
            return  total_spa_rate - ((total_spa_rate * 0.25) * nights());
        case 'double':
            return  total_spa_rate;
        case 'triple':
            return   total_spa_rate + ((total_spa_rate * 0.25) * nights());
    }
}

function parking(){
    var nights_parking = () => parseInt(document.getElementById("number-nights-parking").value);

    return nights_parking() * 10;
}

function result(){

    let total = room_occupation() + parking();
    document.getElementById("result").innerText = "Precio total de la reserva: " + total + "€";

}

document.getElementById("room-type-input").addEventListener("change", result);
document.getElementById("checkbox-spa").addEventListener("change", result);
document.getElementById("room-input").addEventListener("change", result);
document.getElementById("number-nights").addEventListener("change", result);
document.getElementById("number-nights-parking").addEventListener("change", result);
//calcular
//document.getElementById("button-result").addEventListener("click", result());
result();