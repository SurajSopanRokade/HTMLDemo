class PatternStr{
    pattern(str:String):void{
        var str1:Array<String>= str.split(" ")
        for(let i=0; i<str1.length; i++){
            var str2='';
            for(let j=0; j<=i; j++){
                str2=str2+`${str1[j]}`
            }
            console.log(str2)
            
        }
    }
}
var pat=new PatternStr()
pat.pattern('I Love My India')
