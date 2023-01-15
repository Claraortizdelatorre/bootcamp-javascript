const bills = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
var type;
var paymentChange = (money, change) => change / money;

//LIMPIAR LISTADO AL AÑADIR
var printList = (message) => {
    var list = document.getElementById('list');
    var item = document.createElement('li');
    item.innerText = message;
    return list.appendChild(item);
  };

var calculate = () => {
  var total = document.getElementById('total').value;
  var pay = document.getElementById('change').value;
  var change = pay - total;
  console.log('El cambio total es ' + change + ' euros');

  for (const money of bills) {
    var count = paymentChange(money, change);
    if (count >= 1) {
      change = change - parseInt(count) * money;
      money <= 2 ? (type = 'moneda/s') : (type = 'billete/s');
      var message = parseInt(count) + ' ' + type + ' de ' + money + ' euros';
      printList(message)
    }
  }
  return change;
};

//Click
document.getElementById('calculate').addEventListener('click', calculate);
