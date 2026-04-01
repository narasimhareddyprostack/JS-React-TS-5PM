let employess=[
    {eid:101,ename:"Rahul",gender:"Male"},
    {eid:102,ename:"Sonia",gender:"Female"},
    {eid:103,ename:"Priya",gender:"Female"},
    {eid:104,ename:"Modi",gender:"Male"},
    {eid:105,ename:"Amith",gender:"Male"}
]
//print all employee names - using while loop
let i=0;
while(i<=employess.length-1){
    console.log(employess[i].ename);
    i=i+1;
}