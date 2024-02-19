class ReverseAssign{
    reversestr (str:string) :string{
        let word:string='';
        for(let i=0; i<str.length; i++){
            word=str.charAt(i)+word
        }
        return word
    }
}
var ss1= new ReverseAssign();
var st:String=ss1.reversestr('Suraj')
console.log(st)