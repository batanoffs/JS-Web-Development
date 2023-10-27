class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }
    addItem(itemName, quantity) {
        if (
            (typeof itemName !== `string` || itemName instanceof String) &&
            (typeof quantity !== `number` || quantity instanceof Number)
        ) {
            throw new Error("Incorrect input parameters type");
        }
        let index = this.items.findIndex((x) => x.itemName === itemName);

        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        if (this.items.length === this.capacity) {
            throw new Error("The inventory is already full.");
        } else {
            if (index === -1) {
                this.items.push({ itemName, quantity });
                return `Added ${quantity} ${itemName}(s) to the inventory.`;
            } else {
                this.items[index].quantity += quantity;
            }
        }
    }
    sellItem(itemName, quantity) {
        if (
            (typeof itemName !== `string` || itemName instanceof String) &&
            (typeof quantity !== `number` || quantity instanceof Number)
        ) {
            throw new Error("Incorrect input parameters type");
        }
        let index = this.items.findIndex((x) => x.itemName === itemName);

        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        if (index === -1) {
            throw new Error(
                `The item ${itemName} is not available in the inventory.`
            );
        } else {
            if (this.items[index].quantity < quantity) {
                throw new Error(`Not enough ${itemName}(s) in stock.`);
            } else {
                this.items[index].quantity -= quantity;
                if (this.items[index].quantity === 0) {
                    let item = this.items.splice(index, 1).pop();
                    this.outOfStock.push(item);
                }
                return `Sold ${quantity} ${itemName}(s) from the inventory.`;
            }
        }
    }
    restockItem(itemName, quantity) {
        if (
            (typeof itemName !== `string` || itemName instanceof String) &&
            (typeof quantity !== `number` || quantity instanceof Number)
        ) {
            throw new Error("Incorrect input parameters type");
        }
        let indexStore = this.items.findIndex((x) => x.itemName === itemName);
        let indexStock = this.outOfStock.findIndex(
            (x) => x.itemName === itemName
        );
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        if (indexStore !== -1) {
            this.items[indexStore].quantity += quantity;
            return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
        } else {
            this.items.push({ itemName, quantity });
            if (indexStock !== -1) {
                this.outOfStock.splice(indexStock, 1);
            }
            return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
        }
    }
    getInventorySummary() {
        let bufferItems = this.items.map((x) => `${x.itemName}: ${x.quantity}`);
        let bufferStock = this.outOfStock.map((x) => `${x.itemName}`);
        return (
            "Current Inventory:" +
            `\n` +
            bufferItems.join(`\n`) +
            `\n` +
            "Out of Stock: " +
            bufferStock.join(", ")
        );
    }
}

let myManager = new InventoryManager(2);

console.log(myManager.addItem("Hammer", 10));
console.log(myManager.sellItem("Hammer", 10));
console.log(myManager.restockItem("Chisel", 5));
console.log(myManager.restockItem("Drill", 1));
console.log(myManager.getInventorySummary());
