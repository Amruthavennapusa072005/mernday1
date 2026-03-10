let arr=[11,22,33,44,55,66]
let [x,,b]=arr
console.log(b)
let student={
    name:"xyz",
    department:"CSE",
    age:22
}
const {name,department}=student
console.log(name,department);
let car={
    brand:"BMW",
    year:2024
}
const{brand}=car
console.log(brand);
let newCar={...car,year:2025}
console.log(newCar);
    
