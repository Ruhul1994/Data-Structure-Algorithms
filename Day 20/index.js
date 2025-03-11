// class Car {
//     constructor(name, color, type, price) {
//         this.name = name;
//         this.color = color;
//         this.type = type;
//         this.price = price;
//     }
// }

// const Honda = new Car("Venza", "white", "Suv", 30000);
// const toyota = new Car("Camry", "red", "Suv", 35000);

// console.log(toyota);


class DataStructure {
    constructor(name, value) {
        this.name = name;
        this.storage = [value];
    }

    increase(...values) {
        this.storage.push(...values);
    }

    decries(...values){
        this.storage = this.storage.filter(item => !values.includes(item));
    }
}

const bd = new DataStructure('array', 7);
bd.increase(12, 13, 14, 15,18,19);
bd.decries(13,15)
console.log(bd);
