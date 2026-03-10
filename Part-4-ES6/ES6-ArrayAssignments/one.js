let numbers=[11,7,8,18,31,232]
//let new_Numbers=[10,20,234]
//let new_Numbers=[8,18,232]
let new_Numbers=numbers.filter(num=>num%2==0)
                       .map(num=>num+2)
console.log(new_Numbers)