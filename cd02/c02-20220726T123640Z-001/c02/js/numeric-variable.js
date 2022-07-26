var price;
var quantity;
var total;
var price = 5;
var quantity = 14;
var total = price*quantity;
var el = document.getElementById('cost');
el.textContent = '$' + total;