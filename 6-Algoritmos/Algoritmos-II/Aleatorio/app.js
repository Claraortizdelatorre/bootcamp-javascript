var randomPick = (n, min, max) => {
    let number = []
    let number_ale = 0;
    let index = 0;

    do{
        number_ale = Math.round(Math.random() * (max - min) + min);
        if(number.length === 0){
            number.push(number_ale)
            index++;
        }else if(!number.includes(number_ale)){
            number.push(number_ale);
            index++;
        }

    }while(index < n);

    
    
    console.log(number);
  }


  randomPick(6, 1, 6);

  //meterlos en array y print, no se pueden repetir numeros
  //2 funciones, no bucle for , 6 numeros , del 1 al 6