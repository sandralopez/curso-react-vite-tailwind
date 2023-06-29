/*
* Calculate total price of the order
* @param {Array} products
* @returns {number} Total price
*/
export const totalPrice = (products) => {
	let sum = 0;
	products.forEach(product => sum += product.price );
	return sum;
}