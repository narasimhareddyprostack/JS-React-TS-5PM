class Account{
    min_Bal=500;
    open_Account(){
        console.log("Account Opened")
    }
    deposit_Amount(){
        console.log("Amount Deposited!")
    }
    withdrawl_Amount(){
        console.log("Low Balance")
    }
    get_Bal(){
        console.log("Server Busy")
    }
    close_Account(){
        console.log("-ve Bal! try to deposit more funds")
    }
}
let a1=new Account()
a1.open_Account()
a1.deposit_Amount()
a1.withdrawl_Amount()
a1.get_Bal()
a1.close_Account()