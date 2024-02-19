class Animal1{
    move():void{
        console.log('moving.....')
    }
}
class Dog1 extends Animal1{
    bark():void{
        console.log('barking.....')
    }
}
class Dog2 extends Dog1{
    sleep():void{
        console.log('sleeping......')
    }
}
let dd= new Dog2()
dd.move();
dd.bark()
dd.sleep()