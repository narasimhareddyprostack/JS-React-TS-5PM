class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    min_Bal=500;
    constructor(id,name,amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount;
    }
    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount;
    }
    withdrawl(amount){
        this.acc_Bal=this.acc_Bal-amount;
    }
    get_Bal(){
        return this.acc_Bal-this.min_Bal;
    }
}
let a1=new Account(101,"RG",5000)
let a2=new Account(102,"SG",15000)
console.log(a1)
console.log(a2)
console.log("After deposit")
a1.deposit_Amount(500)
a1.deposit_Amount(50)
a2.deposit_Amount(6000)
console.log(a1)
console.log(a2)
console.log("After withdrawl")
a1.withdrawl(50)
a2.withdrawl(10)
console.log(a1)
console.log(a2)
console.log("Print Account Bal")
console.log(a1.get_Bal())
console.log(a2.get_Bal())