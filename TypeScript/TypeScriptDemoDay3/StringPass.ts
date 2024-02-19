class stirngpass{
    // reversestr(str:string):string{
    //     let word:string=''
    //     for(let i=str.length-1; i>=0; i--){
    //         word=word+str.charAt(i)
    //     }
    //     return word
    // }

    //static vowel

    static vowelCount(str:String):number{
        var count:number=0
        for(let i=0; i<str.length; i++){
            if(str.charAt(i)=='a'||str.charAt(i)=='e'||str.charAt(i)=='i'||str.charAt(i)=='o'||str.charAt(i)=='u'||str.charAt(i)=='A'||str.charAt(i)=='E'||str.charAt(i)=='I'||str.charAt(i)=='O'||str.charAt(i)=='U'){
                count++;
            }
        }
        return count;
    }

}

let ss= new stirngpass()
//let dd:string=ss.reversestr("Suraj")
//console.log(dd)
let a= stirngpass.vowelCount('India')
console.log(a)
