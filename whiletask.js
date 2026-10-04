// 1.average of numbers
let n=5
let sum=0
let i=1
while(i<=n){
    sum=sum+i
    i++  
}
avg=sum/n  
console.log("The average of first "+n+"numbers is "+avg);
console.log("=========================================");


//2.sum of square numbers
let n1=5
let sum1=0
let j=1
while(j<=n1){
    sqno=j**2
    j++
    sum1=sum1+sqno
    // console.log(sqno);
}
// sum1=sum1+sqno
console.log("The sum of first "+n1+"square numbers is "+sum1);
console.log("=========================================");

//3.sum of cubes
let n2=5
let sum2=0
let k=1
while(k<=n2){
    sqno1=k**3
    k++
    sum2=sum2+sqno1
    // console.log(sqno1);
}
console.log("The sum of first "+n2+"cube numbers is "+sum2);

console.log("=========================================");

//4.power of a number
let n3=2
let power=5
mul=1
let l=1
while(l<=power){
     l++
    mul=mul*n3
    // console.log(mul);  
}
console.log("The power of number is "+mul);
console.log("=========================================");

//5.febonacci series
let n7=10
let a=0
let b=1
let x=1
console.log("The febonacci series :");
while(x<=n7){
     console.log(a);
     c=a+b
     a=b
     b=c   
     x++
}
console.log("=========================================");

//6.n terms in series 1,1/n,.....
let n4=4
let s=1
while(s<=n4){
    if(s==1){
        console.log(s);
    }
    else{
        console.log("1/"+s);
    }
    s++;
}
console.log("=========================================");

//7.display 1,11,111..
let n5=10
pattern=0
let g=1
while(g<=n5){
    g++;
    pattern=pattern*10+1
    console.log(pattern);
}
console.log("=========================================");

//8.series 1,3,9,.........
let n6=7
mul1=1
let u=1
while(u<=n6){
    if(u==1){
        console.log("1");
    }else{
    mul1=mul1*3
    console.log(+mul1);
    }
    u++;
}
console.log("=========================================");

//9.divisible by 3 and 5
let num7=150
let y=10
while(y<=num7){
    if(y%3==0&&y%5==0){
        console.log(y); 
    }
    y++
}
console.log("==================================");

//10.divisible by 7
let num8=50
let z=200
while(z>=num8){
    if(z%7==0){
        console.log(z);
    }
    z--
}
console.log("=============================");


//11.Not divisible by 5
let num9=20
let q=120;
while(q>=num9){
    if(q%5!=0){
        console.log(q);
    }
    q--
}
console.log("==========================");


//12.average of even numbers
let count=0
let num10=100
sum=0
let v=10
while(v<=num10){
    if(v%2==0){
        // console.log(v);
        // console.log(sum);
        // console.log(count);
        sum+=v
        count+=1
        average=sum/count
    }
    v++
}
console.log(average);
console.log("============================");

//13.average of factors
let fact=4
let count1=0
sum1=0
let p=1
while(p<=fact){
    if(fact%p==0){
        count1+=1
        sum1+=p
        Average=sum1/count1
    }
    p++
}
console.log(Average);
