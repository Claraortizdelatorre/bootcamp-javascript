let plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
let encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";


function position_array_encrypt(text,alphabetA,alphabetB){
    let result = "";
    text = text.toLowerCase();
    let index =0;
    for (let i = 0; i < text.length; i++) {
        if(alphabetA.includes(text[i])){
            index = alphabetA.indexOf(text[i]);
            result += alphabetB[index];
        }else if(text[i].includes(' '))
        result += ' ';
    }  
      
    return result;  
}

function encrypt_result(){
    let encryptedText = document.getElementById("textarea-encrypt").value;
    let textResult = position_array_encrypt(encryptedText, plainAlphabet, encryptedAlphabet);
    document.getElementById("textarea-decrypt").value = textResult;
}

function decrypt_result(){
    let decryptedText = document.getElementById("textarea-decrypt").value;
    let textResult = position_array_encrypt(decryptedText, encryptedAlphabet, plainAlphabet);
    document.getElementById("textarea-encrypt").value = textResult;
}


//Click
document.getElementById("encrypt").addEventListener("click", encrypt_result);
document.getElementById("decrypt").addEventListener("click", decrypt_result);