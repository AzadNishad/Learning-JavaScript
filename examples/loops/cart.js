// Shopping Cart: Calculate total price with tax and discounts using loops.

const kart = [
    { name: 'Laptop', price: 60000, quantity: 1},
    { name: 'Phone', price: 20000, quantity: 2},
    { name: 'Headphones', price: 2000, quantity: 3},
    { name: 'Charger', price: 1000, quantity: 2},
    { name: 'USB Cable', price: 500, quantity: 5},
];

let total = 0;
const taxRate = 0.1;
const discountThreshold = 50000; // 5% discount for orders above this amount
const discountRate = 0.05;

function calculateTotal(cart) {
    cart.length === 0 ?? null;
    for(let i=0; i<cart.length;i++){
        let item = cart[i];
        let subTotal = 0;
        subTotal += item.price * item.quantity;
        item.total = subTotal;
        let tax = subTotal * taxRate;
        item.tax = tax;
        item.finalPrice = subTotal + tax;
        total += subTotal + tax;
    }
    console.table(cart);
    console.log('Total before discount: ₹' + total.toFixed(2));
    if(total > discountThreshold) {
        console.log('Discount Applied: ' + (discountRate * 100) + '%');
        total -= total * discountRate;
    }
    return console.log('Final Total: ₹' + total.toFixed(2));
}

calculateTotal(kart);

// OUTPUT:
/*
┌─────────┬──────────────┬───────┬──────────┬───────┬──────┬────────────┐
│ (index) │ name         │ price │ quantity │ total │ tax  │ finalPrice │
├─────────┼──────────────┼───────┼──────────┼───────┼──────┼────────────┤
│ 0       │ 'Laptop'     │ 60000 │ 1        │ 60000 │ 6000 │ 66000      │
│ 1       │ 'Phone'      │ 20000 │ 2        │ 40000 │ 4000 │ 44000      │
│ 2       │ 'Headphones' │ 2000  │ 3        │ 6000  │ 600  │ 6600       │
│ 3       │ 'Charger'    │ 1000  │ 2        │ 2000  │ 200  │ 2200       │
│ 4       │ 'USB Cable'  │ 500   │ 5        │ 2500  │ 250  │ 2750       │
└─────────┴──────────────┴───────┴──────────┴───────┴──────┴────────────┘
Total before discount: ₹121550.00
Discount Applied: 5%
Final Total: ₹115472.50
 */