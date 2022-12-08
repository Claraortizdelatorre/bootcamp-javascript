/*
Las condiciones:

Por rango de salario:

Si el empleado gana menos de 12.000 € bruto año aplicar una retención del 0%
Si el empleado gana menos de 24.000 € bruto año aplicar una reteneción del 8%
Si el empleado ganas menos de 34.000 € bruto año aplicar una reteneción del 16%
Si el empleado ganas más de 34.000 € bruto año aplicar una reteneción del 30%
Adicionalmente:

Si el empleado tiene hijos, restarle a la retencion 2 puntos. Con esto sacaríamos el neto anual en nómina.
Siguiente paso, sacar el neto mensual (si es catorce pagas dividir por catorce, si no por 12)
*/

const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14,
  };

  //Si el empleado tiene hijos, restarle a la retencion 2 puntos.
  function sons(empleado){
    return empleado.hijos > 0 ? 0.20 : 0;
  }

  function retention(empleado){
    var total;
    const points = sons(empleado);

    if(empleado.bruto <= 12000){
        total = empleado.bruto;

    }else if(empleado.bruto <= 24000){
        total = empleado.bruto - (empleado.bruto * (0.08  - points));

    }else if(empleado.bruto <= 34000){
        total = empleado.bruto - (empleado.bruto * (0.16 - points));

    }else if(empleado.bruto > 34000){
        total = empleado.bruto - (empleado.bruto * (0.30 - points));

    }

    return total;
  }


//Siguiente paso, sacar el neto mensual (si es catorce pagas dividir por catorce, si no por 12)
  function monthly(empleado){
    return empleado.pagas === 14 ? 14 : 12;
  }

function print(empleado) {

    const ret = retention(empleado);
    const points = sons(empleado);
    const net = monthly(empleado);
    const total = (ret/net);
  
    console.log("Retencion:", ret + "€");
    console.log("points:", points);
    console.log("net:"+ net);
    console.log("Total:" + total);
  }

var result = print(empleado);
