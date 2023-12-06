class OnlineShop {	
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error("Not enough space in the warehouse.");
        }

        this.warehouseSpace -= spaceRequired;
        this.products.push({ product, quantity });
        return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity) {
        let result = this.products.find(p => p.product === product);

        if (!result) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.")
        }

        if (minimalQuantity <= result.quantity) {
            return `You have enough from product ${product}.`
        }
        
        let difference = minimalQuantity - result.quantity;
        result.quantity = minimalQuantity;
        return `You added ${difference} more from the ${result.product} products.`  
    }

    sellProduct(product) {
        const result = this.products.find((p) => p.product === product);

        if(!result) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        result.quantity--;
        if(this.sales.find(s => s.product === product)) {
            this.sales.find(s => s.product === product).quantity++;
        } else {
            this.sales.push({product, quantity: 1});
        }

        return `The ${result.product} has been successfully sold.`
    }

    revision() {
        let buffer = [];       
        
        const totalSales = this.sales.reduce((sum, sale) => {
            sum += Number(sale.quantity);
            return sum;
        }, 0);

        if(totalSales === 0) {
            throw new Error ("There are no sales today!") 
        }

        buffer = this.products.map(p => `${p.product}-${p.quantity} more left`).join('\n').trimEnd();
        return `You sold ${totalSales} products today!` + "\n"
        + "Products in the warehouse:" + "\n" + buffer;
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());