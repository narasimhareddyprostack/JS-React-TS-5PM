function login(name,pwd){
    if(name==="Rahul" && pwd===123){
        return true;
    }
    return false;
}
let st1=login("Rahul",123)
let st2=login("Rahul",145)
console.log(st1)
console.log(st2)