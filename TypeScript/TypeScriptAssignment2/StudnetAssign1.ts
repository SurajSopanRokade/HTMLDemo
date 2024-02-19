class student{
    s_id:number
    s_name:string
    sub1:number
    sub2:number
    sub3:number
    percentage:number 
    percentage1:number
    constructor(s_id:number, s_name:string, sub1:number, sub2:number, sub3:number ){
        this.s_id=s_id;
        this.s_name=s_name
        this.sub1=sub1
        this.sub2=sub2
        this.sub3=sub3
        this.percentage=this.calculatePercentage()
    }
    calculatePercentage():number{
         return this.percentage=(this.sub1+this.sub2+this.sub3)/3
    }
    display():void{
        console.log(this.s_id+" "+this.s_name)
        console.log(this.percentage)
    }
}

let Stud=new student(1,"Suraj", 66,88,77)
Stud.display()