interface Interface1{
     a:number
}
class Class1{
    b:number=12;
}
class Class2 extends Class1 implements Interface1{
    a=12;
    c:number=this.a+this.b;
}

let r = new Class2()
console.log(r.c)