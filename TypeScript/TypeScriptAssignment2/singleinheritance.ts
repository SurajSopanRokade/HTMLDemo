class Animal{
    eat():void{
        console.log('eating.....')
    }
}
class Dog extends Animal{
    bark():void{
        console.log('barking.....')
    }
}
let d= new Dog()
d.bark()
d.eat()