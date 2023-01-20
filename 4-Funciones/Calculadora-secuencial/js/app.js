let number_result = 0;
var number = () => parseInt(document.getElementById("input-number").value);
const arrayNumber = [];
var arrayResult = [];
//mostrar alerta cuando se divida entre 0
//ir pintando el resultado con 2 resultados

function checkEmpty(){
    if(isNaN(number())){
        document.getElementById("result").innerHTML = "Rellena el campo";
    }  
}

/*Añadir array*/
function result_add(){
    if(!checkEmpty() || typeof(number()) != 'undefined'){
        arrayNumber.push(number())
        arrayNumber.push('+')
        print(number() + ' + ')
    }

    inputReset() 
}

function result_subtract(){
    if(!checkEmpty()){
        arrayNumber.push(number())
        arrayNumber.push('-')
        print(number() + ' - ')
    } 

   
    inputReset() 
}

function result_divide(){
    if(!checkEmpty()){
        arrayNumber.push(number())
        arrayNumber.push('/')
    }

    print(number() + ' / ')
    inputReset() 
}

function result_multiply(){
    if(!checkEmpty()){
        arrayNumber.push(number())
        arrayNumber.push('*')
    }

    print(number() + ' x ')
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
            if(number() === 0){
                alert("No se puede dividir entre 0")

            }else{
                result /= arrayNumber[i+1];
            }
           
        }
      
    }
    return result;
}


function inputReset() {
    //arrayNumber = [];
    document.getElementById("input-number").value = "";
    
}

function print(symbol){
   
   var result;
   arrayResult.push(symbol);
   document.getElementById("print").innerHTML = "";

   if(isNaN(number())){
    document.getElementById("result").innerHTML =  "Rellena el campo";
   }else{
    for(let i = 0 ; i < arrayResult.length; i++){
        result += arrayResult[i];
       }
   }

   document.getElementById("print").innerHTML = result;
   console.log(result);
} 


function print_result(){
    let result = setResult();

    if(Number.isNaN(result)){
        document.getElementById("result").innerHTML =  "Rellena el campo";
    }else{

        print(number() + ' = ' + result);
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
document.getElementById("button-result").addEventListener("click", print_result);
document.getElementById("add").addEventListener("change", print);
document.getElementById("subtract").addEventListener("change", print);
document.getElementById("divide").addEventListener("change", print);
document.getElementById("multiply").addEventListener("change", print);
document.getElementById("button-result").addEventListener("change", print);
//document.getElementById("button-reset").addEventListener("click", reset);





