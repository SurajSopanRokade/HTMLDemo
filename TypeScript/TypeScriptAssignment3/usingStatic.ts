class UseStaticKey{
    static str:string="I am static variable"
    static UseStat():string{
         var sss='I am in static method'
         return sss
    } 
}
let sss = new UseStaticKey()
let sss1:string=UseStaticKey.UseStat();
console.log("method string : "+sss1)
console.log("method string : "+UseStaticKey.str)
