// Bitwise Operators Demo

let a = 5;   
let b = 3;   

console.log("a =", a, "b =", b);
console.log("----------------------");


console.log("a & b  =", a & b);     

console.log("a | b  =", a | b);     // 7

// 3. XOR
console.log("a ^ b  =", a ^ b);     // 6

// 4. NOT
console.log("~a     =", ~a);        // -6

// 5. Left Shift
console.log("a << 1 =", a << 1);    // 10

// 6. Right Shift
console.log("a >> 1 =", a >> 1);    // 2

// 7. Unsigned Right Shift
console.log("-a >>> 1 =", (-a) >>> 1);  // Large positive number

console.log("----------------------");

// ✅ Extra Tricks

// Check even or odd
if (a & 1)
    console.log(a, "is Odd");
else
    console.log(a, "is Even");

// Swap using XOR
let x = 10, y = 20;
console.log("Before swap: x =", x, "y =", y);

x = x ^ y;
y = x ^ y;
x = x ^ y;

console.log("After swap: x =", x, "y =", y);