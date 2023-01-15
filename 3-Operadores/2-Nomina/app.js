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


  //retención
  function getRetent(empleado){
    var retent;

    if(empleado.bruto <= 12000){
      retent = empleado.bruto;

    }else if(empleado.bruto <= 24000){
      retent = empleado.bruto - (empleado.bruto * 0.08 );

    }else if(empleado.bruto <= 34000){
      retent = empleado.bruto - (empleado.bruto * 0.16 );

    }else if(empleado.bruto > 34000){
      retent = empleado.bruto - (empleado.bruto * 0.30 );

    }
   
    return retent;
  }

  //neto anual
  function getAnnualSalary(empleado){
    var retent = getRetent(empleado);
    return empleado.hijos > 0 ? retent - 0.02 : retent;
  }

  //neto mensual
  function getMonthlySalary(empleado){
    var annualSalary = getAnnualSalary(empleado)
    return empleado.pagas === 14 ? annualSalary/14 : annualSalary/12;
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
