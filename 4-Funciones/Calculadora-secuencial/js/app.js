let number_result = 0;
var number = () => parseInt(document.getElementById("input-number").value);
const arrayNumber = [];


function checkEmpty(){
    if(isNaN(number())){
        document.getElementById("result").innerHTML = "Rellena el campo";
    }  
}

/*Añadir array*/
function result_add(){
    if(!checkEmpty()){
        arrayNumber.push(number())
        arrayNumber.push('+')
    }
    inputReset() 
}

function result_subtract(){
    if(!checkEmpty()){
        arrayNumber.push(number())
        arrayNumber.push('-')
    } 
    inputReset() 
}

function result_divide(){
    if(!checkEmpty()){
        arrayNumber.push(number())
        arrayNumber.push('/')
    } 
    inputReset() 
}

function result_multiply(){
    if(!checkEmpty()){
        arrayNumber.push(number())
        arrayNumber.push('*')
    }
    inputReset() 
}



function setResult() {
    let result = 0;
    arrayNumber.push(number());

    for(let i = 0 ; i < arrayNumber.length ; i++){

        if(i===0){
            result = arrayNumber[i]
        }
        if(arrayNumber[i] === '+'){
            result += arrayNumber[i+1];
        }else if(arrayNumber[i] === '-'){
            result -=  arrayNumber[i+1];
        }else if(arrayNumber[i] === '*'){
            result *= arrayNumber[i+1];
        }else if(arrayNumber[i] === '/'){
            result /= arrayNumber[i+1];
        }
      
    }
    return result;
}


function inputReset() {
    //arrayNumber = [];
    document.getElementById("input-number").value = "";
    
}


function print(){
    let result = setResult();

    if(Number.isNaN(result)){
        document.getElementById("result").innerHTML =  "Rellena el campo";
    }else{
        document.getElementById("result").innerHTML = "Resultado:   " + parseInt(result);
        inputReset();
    }
}


//Reset
let refresh = document.getElementById('button-reset');
refresh.addEventListener('click', _ => {
            location.reload();
})


//Onclick
document.getElementById("add").addEventListener("click", result_add);
document.getElementById("subtract").addEventListener("click", result_subtract);
document.getElementById("divide").addEventListener("click", result_divide);
document.getElementById("multiply").addEventListener("click", result_multiply);
document.getElementById("button-result").addEventListener("click", print);
//document.getElementById("button-reset").addEventListener("click", reset);





