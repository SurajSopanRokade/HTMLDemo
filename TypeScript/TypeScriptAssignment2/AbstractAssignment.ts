abstract class vehical{
    abstract driving():void;
    moving():void{
        console.log('moving......')
    }
    
}
class car extends vehical{
    driving(): void {
        console.log('driving......')
    }
}
let t = new car()
t.moving()
t.driving()