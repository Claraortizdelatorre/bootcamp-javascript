
//Recojo datos de input
let number_result = 0;
var number = () => parseInt(document.getElementById("input-number").value);

function result_add(){

    console.log("entra en la suma ", number_result);
    if(isNaN(number())){
        document.getElementById("result").innerHTML = "Rellena el campo";   
    }else{
        number_result += number();
        clean();
    }
}

function result_subtract(){

    if(isNaN(number())){
        document.getElementById("result").innerHTML = "Rellena el campo";
    }else{
        if (number_result === 0){
            number_result = number();

        }else if(number_result < number()){
            number_result = number() - number_result;

        }else{
            number_result -=number();
        }
       
        clean();
    }
}

function result_divide(){

    if(isNaN(number())){
        document.getElementById("result").innerHTML = "Rellena el campo";
    }else{
        number_result /= number();
        clean();
    }
}

function result_multiply(){

    if(isNaN(number())){
        document.getElementById("result").innerHTML = "Rellena el campo";
    }else{

        number_result *= number();
        clean();
    }
}

function same(){
    return setResult(number_result);   
}

function setResult(result) {
    document.getElementById("result").innerHTML = "Resultado:  " + result;
}

function inputReset() {
    document.getElementById("input-number").value = "";
}

function clean(){
    inputReset();
    document.getElementById("result").innerHTML = "";
}

//Onclick
document.getElementById("add").addEventListener("click", result_add);
document.getElementById("subtract").addEventListener("click", result_subtract);
document.getElementById("divide").addEventListener("click", result_divide);
document.getElementById("multiply").addEventListener("click", result_multiply);
document.getElementById("button-result").addEventListener("click", same);




