shoppingList = [
	item1 = {
		name: "milk",
		price: 1.87
	},
	item2 = {
		name: "eggs",
		price: 1.09
	},
	item3 = {
		name: "bread",
		price: 1.19
	}
];

var list = document.getElementById("list");
var foodTotal = document.getElementById("foodTotal")
var total = 0;

shoppingList.forEach(function(item) {
	var newItem = document.createElement("li");
	newItem.innerText += item.name + ": " + item.price;
	list.appendChild(newItem);
	total += item.price;
});

foodTotal.innerText = total;