let state={
    user:{
        uid:101,
        uname:"Rahul",
        loc:"Wayanad"
    },
    product:{
        pid:'p101',
        product_Name:"Market Pen",
        price:30,
        qty:3

    },
    avail:true
}
//console.log(pid)  Ref Error
let {product}  = state;
let {pid}=product;
//console.log(state.product.pid)
console.log(pid)