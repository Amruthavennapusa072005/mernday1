let products=[
    {id:1,name:'laptop',price:25000},
    {id:2,name:'mobile',price:9500},
    {id:3,name:'keyword',price:2000},
]
let productName=products.map((product)=>{console.log(product.name)})
let product=products.filter((p)=>p.price>6000)
console.log(product)
let arr=[1,2,3,4,5,6]
let sum=arr.reduce((total,curr)=>{return total+curr},0)
console.log(sum);
let totalPrice = products.map(p =>p.price).reduce((total,curr)=>total+curr,0);
console.log(totalPrice);
let a=products.find((p)=>p.id==2)
console.log(a);