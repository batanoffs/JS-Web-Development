// class FashionRetailInventory {



//     constructor(storehouse, location) {
//         this.productStock = [];
//         this.storehouse = storehouse;
//         this.location = location;
//     }

//     addProduct(productName, size, quantity, price) {
//         const result = this.productStock.find(product => product.productName === productName);
        
//         if(result) {
//             if (result.size === size) {
//                 result.quantity += quantity;
//                 return `You added ${quantity} more pieces of product ${productName} size ${size}`
//             } else {
//                 this.productStock.push({productName, size, quantity, price});
//                 return `The product ${productName}, size ${size} was successfully added to the inventory`
//             }
//         } else {
//             this.productStock.push({productName, size, quantity, price});
//             return `The product ${productName}, size ${size} was successfully added to the inventory`
//         }
//     }

//     sendProduct (productName, size) {
//         const result = this.productStock.find(product => product.productName === productName && product.size === size);
//         if(result) {
//             this.productStock.splice(this.productStock.indexOf(result), 1);
//             return `The product ${productName}, size ${size} was successfully removed from the inventory`
//         } else {
//             throw new Error (`The product ${productName}, size ${size} is not in the inventory`)
//         }
//     }

//     findProductsBySize(size) {
//         let buffer = [];
//         const products = this.productStock.filter(product => product.size === size);
//         if(products && products.length > 0) {          
//             for (const product of products) {
//                 buffer.push(` ${product.productName}-${product.quantity} pieces`)
//             }
//             return buffer.join().trim();
//         } else {
//             return `There are no products available in that size`
//         }
//     }

//     listProducts () {
//         const products = this.productStock.sort((a, b) => a.productName.localeCompare(b.productName));
//         if (products && products.length > 0) {
//             let buffer = [];
//             for (const product of products) {
//                 buffer.push(`${product.productName}/Size:${product.size}/Quantity:${product.quantity}/Price:${product.price}$`)
                
//             }
//             return `${this.storehouse} storehouse in ${this.location} available products:` + "\n"
//                      + buffer.join('\n').trim();
//         } else {
//             return `${this.storehouse} storehouse is empty`
//         }
//     }
// }

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
// console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
// console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
// console.log(storeHouse.listProducts());



let a = [1,5,8];

console.log(a.indexOf(0));
console.log(a.indexOf(1));