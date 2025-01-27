// const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
//     name => name.toUpperCase()
//   );
//   console.log(upperizedNames)

// const greet = name => `Hello ${name}`
// console.log(greet("Muhanguzi"))

// function greet(name = "Student", greeting = "Welcome"){
//     return `${name} ${greeting}`
// }
// console.log(greet("Boss"))

// function createSundae ({scoops = 1, toppings = ["Hot Fudge"]}){
//     const scoopText = scoops === 1? 'scoop' : 'scoops';
//     return `Your sandae has ${scoops} ${scoopText} with ${toppings.join(' and ')} topppings.`
// }
// console.log(createSundae({scoops:3, toppings: ["Pineapple", "Orange"]}))


// function createGrid([width = 2, length = 7]){
//     return `It is a ${width} * ${length} matrix`
// }
// console.log(createGrid([4,5]))

// A javascript class is not an object
// It is a template for Javascript objects


/*class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}
const car1 = new Car("Ford", 2014)
const car2 = new Car("Toyota", 2017)

console.log(`Car One: ${car1.name}, Year: ${car1.year}`)
console.log(`Car Two: ${car2.name}, Year: ${car2.year}`)
*/


// The above uses the class Car to create two car objects



//Class methods with parameters
// class Car {
// constructor(name, year){
//     this.name = name;
//     this.year = year;
// }
// age(x){
//     return x - this.year;
// }
// }
// const date = new Date();
// let year = date.getFullYear();

// const myCar = new Car("Ford", 2014)

// console.log(`My car is ${myCar.age(year)} years old.`)

// class Vehicle {
//     constructor(brand){
// this.brand = brand;
//     }
//     start(){
//         return `${this.brand} is starting.....`
//     }
// }
// class car extends Vehicle{
//     constructor(brand, year){
//         super(brand);
//         this.year = year;
//     }
//     displayInfo(){
//         return `${this.brand} Year: ${this.year}`;
//     }
// }
// const myCar = new car("Toyota", 2018)
// console.log(myCar.start());
// console.log(myCar.displayInfo());

// class Vehicle{
//     constructor(color = "blue", wheels = 4, horn = "beep beep"){
//         this.color = color;
//         this.wheels = wheels;
//         this.horn = horn;
//     }
//     honkHorn(){
//         return this.horn;
//     }
// }
// class Bicycle extends Vehicle{
//     constructor(color = "blue", wheels = 2, horn = "honk honk"){
//         super(color, wheels, horn)
//     }
// }
// const myVehicle = new Vehicle();
// console.log(myVehicle.honkHorn())
// const myBike = new Bicycle()
// console.log(myBike.honkHorn())


//The set removes duplicates when giving out the output
// const games = new Set(["Boss.", "Muhanguzi", "Mutsinzi", "Boss."]);
// games.add("Javascript")
// games.add("Tailwind")
// games.delete("Boss.")
// games.clear()
// console.log(games)

//length of a Set
// const months = new Set(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
// console.log(months.size)
// console.log(months.has("August"))
// console.log(months.values())



Looping through a Set in ES6
const colors = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown', 'black']);
for (const color of colors) {
  console.log(color);
}



//Weak sets
// let student1 = {name: "Muhanguzi", age: 22, gender: "male"};
// let student3 = {name: "Mary", age: 21, gender: "female"};

// const roster = new WeakSet([student1, student2, student3]);
// console.log(roster);

// let student1 = { name: 'James', age: 26, gender: 'male' };
// let student2 = { name: 'Julia', age: 27, gender: 'female' };
// let student3 = { name: 'Richard', age: 31, gender: 'male' };

// const roster = new WeakSet([student1, student2, student3]);
// console.log(roster);

// const employees = new Map()
// employees.set("muhanguzi@gmail.com", {
//     firstName: "Boss",
//     lastName: "Muhanguzi",
//     role: "Web developer"
// });
// employees.set("kayesu@gmail.com", {
//     firstName: "Patience",
//     lastName: "Kayesu",
//     role: "student"
// })
// employees.delete("muhanguzi@gmail.com")
// employees.clear()
// console.log(employees)

// const members = new Map()
// members.set("Evelyn", 23.5);
// members.set("Anna", 20.8);
// members.set("George", 34.2);
// console.log(members.get("George"))
