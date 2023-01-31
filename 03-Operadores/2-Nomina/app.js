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

// restar 2

const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14,
  };


  //retención
  function getRetent(empleado){ //devolver el % de retencion ej.0,23
    var retent;
    var retent_sons = 0;

    if (empleado.hijos > 0){
      retent_sons = 0.02;
    }


    if(empleado.bruto <= 12000){
      retent = retent_sons;

    }else if(empleado.bruto <= 24000){
      retent = 0.08 - retent_sons; 

    }else if(empleado.bruto <= 34000){
      retent = 0.16 - retent_sons;

    }else if(empleado.bruto > 34000){
      retent = 0.30 - retent_sons;

    }
    return retent; // aqui restar 0.02 (si no tiene retencion devolver 0)
  }

  //neto anual
  function getAnnualSalary(empleado){
    return empleado.bruto - (empleado.bruto * getRetent(empleado)); 
  }

  //neto mensual
  function getMonthlySalary(empleado){
    return getAnnualSalary(empleado)/empleado.pagas;
  }



function print(empleado) {
    const retent = getRetent(empleado);
    const netAnnualSalary = getAnnualSalary(empleado);
    const netMonthlySalary = getMonthlySalary(empleado);
  
    console.log("Retención:", retent + "€");
    console.log("Salario neto anual:"+ netAnnualSalary.toFixed(2) + "€");
    console.log("Salario neto mensual:" + netMonthlySalary.toFixed(2) + "€");
  }

var result = print(empleado);
