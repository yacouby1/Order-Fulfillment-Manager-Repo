let inventory = [
    {
        sku: "SKU_001",
        name: "Rolex GMT-Master II",
        price: 15500,
        stock: 2
    },
    {
        sku: "SKU_002",
        name: "Rolex Submariner Date",
        price: 11250,
        stock: 4
    },
    {
        sku: "SKU_003",
        name: "Rolex Sky Dweller",
        price: 53500,
        stock: 1
    },
    {
        sku: "SKU_004",
        name: "Rolex Yacht Master II",
        price: 29800,
        stock: 3
    }
];

inventory.forEach(function(item) {
    console.log(
        `$item.sku} | {item.name} | {item.price} | Stock: {item.stock}`
    );
});

inventory.push({
    sku: "SKU_005",
    name: "Rolex Oysterdate",
    price: 4500,
    stock: 6
});

let removedItem = inventory.pop();
console.log("Removed item:", removedItem.name);

inventory[1].price = inventory[1].price - 500;

inventory[2].stock = inventory[2].stock + 4; 

let orders = [
    {
    orderId: "ORD_001",
    items: [
        { sku: "SKU_001", qty: 1 }
    ]
    },
    {
        orderId: "ORD_002",
        items: [
            { sku: "SKU_003", qty: 1 }
        ]
    }
];

function processOrder(order) {
    let total = 0;

    order.items.forEach(function(orderItem) {

        inventory.forEach(function(product) {
            if (product.sku == orderItem.sku) {

                if (product.stock >= orderItem.qty) {
                    product.stock = product.stock - orderItem.qty;
                    total = total + (product.price * orderItem.qty);
                }
            }

        });
    });

    return total;
}

orders.forEach(function(order) {
    console.log(processOrder(order));
});

let totalInventoryValue = inventory.reduce(function(total, product) {
    return total + (product.price * product.stock);
}, 0); 

console.log("Total Inventory Value;", totalInventoryValue);

let lowStockItems = inventory.filter(function(product) {
    return product.stock <= 5;
});

console.log("Low Stock Items:", lowStockItems);

let pricelist = inventory.map(function(product) {
    return product.sku + " - " + product.price;
});

console.log("Price List:", pricelist);