
//Recojo datos de input
var numberA = () => parseInt(document.getElementById("input-A").value);
var numberB = () => parseInt(document.getElementById("input-B").value);



function result_add(){
    console.log(numberA())
    if(isNaN(numberA()) || isNaN(numberB())){
        document.getElementById("result").innerHTML = "Rellena los dos campos";   
    }else{
        return setResult(numberA() + numberB());
    }
}

function result_subtract(){
    if(isNaN(numberA()) || isNaN(numberB())){
        document.getElementById("result").innerHTML = "Rellena los dos campos";
    }else{
        return setResult(numberA() - numberB()); 
    }
}

function result_divide(){
    if(isNaN(numberA()) || isNaN(numberB())){
        document.getElementById("result").innerHTML = "Rellena los dos campos";
    }else{
        return setResult(numberA() / numberB()); 
    }
}

function result_multiply(){
    if(isNaN(numberA()) || isNaN(numberB())){
        document.getElementById("result").innerHTML = "Rellena los dos campos";
    }else{
        return setResult(numberA() * numberB()); 
    }
}


function setResult(result) {
    document.getElementById("result").innerHTML = "Resultado:  " + result;
}

//Onclick
document.getElementById("add").addEventListener("click", result_add);
document.getElementById("subtract").addEventListener("click", result_subtract);
document.getElementById("divide").addEventListener("click", result_divide);
document.getElementById("multiply").addEventListener("click", result_multiply);



