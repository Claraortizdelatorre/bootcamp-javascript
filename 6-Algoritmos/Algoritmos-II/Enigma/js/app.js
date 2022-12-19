let plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
let encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";


function position_array_encrypt(text){
    let result = "";
    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        let index = plainAlphabet.indexOf(text[i]);
        result += encryptedAlphabet[index];
    }
    return result;  
}

function position_array_decrypt(text){
    let result = "";
    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        let index = encryptedAlphabet.indexOf(text[i]);
        result += plainAlphabet[index];
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
    let textResult = position_array_decrypt(decryptedText, encryptedAlphabet, plainAlphabet);
    document.getElementById("textarea-encrypt").value = textResult;
}


//Click
document.getElementById("encrypt").addEventListener("click", encrypt_result);
document.getElementById("decrypt").addEventListener("click", decrypt_result);