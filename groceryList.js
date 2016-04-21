shoppingList = [
	{
		name: "milk",
		price: 1.87
	},
	{
		name: "eggs",
		price: 1.09
	},
	{
		name: "bread",
		price: 1.19
	}
];

var list = document.getElementById("list");
var foodTotal = document.getElementById("foodTotal");
var total = 0;
var button = document.getElementById("button");



shoppingList.forEach(function(item) {
	var newItem = document.createElement("li");
	newItem.innerText += item.name + ": " + item.price;
	list.appendChild(newItem);
	total += item.price;
	foodTotal.innerText = total;
});

button.addEventListener("click", function() {
	var userFood = document.getElementById("food").value;
	var userPrice = Number(document.getElementById("price").value);
	var newUserFood = document.createElement("li");
	newUserFood.innerText += userFood + ": " + userPrice;
	list.appendChild(newUserFood);
	total += userPrice;
	foodTotal.innerText = total.toFixed(2);
});



