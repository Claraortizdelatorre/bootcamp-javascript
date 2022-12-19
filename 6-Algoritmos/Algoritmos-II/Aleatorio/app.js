var randomPick = (n, min, max) => {
    for(let i=0 ; i < n ; i++){
        console.log(Math.round(Math.random() * (max - min) + min));
    }
  }

  randomPick(10, 1, 100);