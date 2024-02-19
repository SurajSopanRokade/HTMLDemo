var arr2=[2,3,45,6,7,78,8]
for (let i=0; i<arr2.length; i++){
    console.log("\n"+arr2[i])
}
for(let n in arr2){
    console.log("Using n : "+arr2[n])
}
for(let m of arr2){
    console.log("Using m : "+m)
}

//even elements

for(let n of arr2){
    if(n%2==0){
        console.log("Even : "+n)
    }
}

//reverse Array
console.log("Before reverse : "+arr2)
    var u=arr2.length-1;
    var temp=0;
    for(let j=0; j<arr2.length/2; j++){
        
        temp=arr2[j]
        arr2[j]=arr2[u]
        arr2[u]=temp
        u--;
    }
console.log("After reverse : "+arr2)

//sum of array Element

    var sum=0;
    for( let a of arr2){
        sum=sum+a
    }
    console.log("Sum : "+sum)

//find max
    var max=0;
    for( let c of arr2){
        if(c>max){
            max=c
        }
    }
    console.log("Max : "+max)

// find min

    var min=arr2[0]
    for(let y of arr2){
        if(y<min){
            min=y
        }
    }
    console.log("Min : "+min)

// merge 2 arrays
 var arr6=[2,3,4,5,6,7,7,8]
 var arr7:Array<number>=[];
    var p=0
    for(let i=0; i<arr2.length; i++){
        arr7[p]=arr2[i]
        p++
    }
    for(let i=0; i<arr6.length; i++){
        arr7[p]=arr6[i]
        p++
    }
    console.log(arr7)

