// total the prices
// print total

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

var total = 0;

shoppingList.forEach(function(el) {
	console.log(el.name, el.price);
	total += el.price;
});

console.log("total " + total);