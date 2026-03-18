let products=[];
let getData =async ()=>{
    let resp=await fetch('https://dummyjson.com/products')
    let product_Data=await resp.json();
    products=product_Data.products;
    console.log(products.length)
    displayData();
}
let displayData=()=>{
let rows="";
products.forEach((product)=>{
    rows=rows+`<tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>${product.rating}</td>
                <td>${product.category}</td>
                </tr>`
})   
document.getElementById('tbody_Data').innerHTML=rows;
}
getData();