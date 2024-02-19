class Student{
    id:number
    name:string
    constructor(id:number, name:string){
        this.id=id
        this.name=name
    }
    display():void{
        console.log(this.id+" "+this.name)
    }
}
let s= new Student(100, 'Nikhil')
s.display()
