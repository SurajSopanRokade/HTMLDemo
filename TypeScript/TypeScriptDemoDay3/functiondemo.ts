function display(a:string, b:string):string

function display(a:number, b:number):number

function display(x:any, y:any){
    return x+y
}

var ss:string=display('yesh','gupta')
var ss1:number=display(3,4)
console.log(ss)
console.log(ss1)
