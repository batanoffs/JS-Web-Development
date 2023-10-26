class List {
    constructor() {
        this.collection = [];
        this.size = 0;
    }

    add(element) {
        this.collection.push(element);
        this.size = this.collection.length;
        return this.collection.sort((a, b) => a - b);
    }

    remove(i) {
        if (i < 0 || i >= this.collection.length) {
            throw new Error(`Invalid index`);
        }
        this.collection.splice(i, 1);
        return (this.size = this.collection.length);
    }

    get(j) {
        if (j < 0 || j >= this.collection.length) {
            throw new Error(`Invalid index`);
        }
        return this.collection[j];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
