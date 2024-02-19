class Shopping{
    product_id:number
    product_name:string
    quantity:number
    price :number
    bill:number

    constructor(product_id:number,product_name:string,quantity:number,price:number){
    this.product_id=product_id
    this.product_name=product_name
    if(quantity>0){
    this.quantity=quantity
    }
    else{
        console.log('quantity is 0 or less than 0 .....')
    }
    this.price=price
    this.bill=this.calculatebill()
    }
    calculatebill (): number{
        return this.bill=this.price*this.quantity
    }
    display():void{
        console.log(this.product_id+" "+this.product_name+" "+this.quantity+" "+this.price+" "+this.bill)
    }

}

 let shop=new Shopping(1,'maggie',34,10)
 shop.display()