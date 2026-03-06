let numbers=[11,7,8,18,31,232]

let even_numbers=numbers.filter((num)=>{
    return num%2===0;
})
console.log(even_numbers)
let new_Numbers=even_numbers.map((num)=>{
    return num+2;
})
console.log(new_Numbers)