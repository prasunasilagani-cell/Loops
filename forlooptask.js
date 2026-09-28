// 1.average of numbers
let n=5
let sum=0
for(i=1;i<=n;i++){
    sum=sum+i
    avg=sum/n    
}
console.log(avg);
console.log("=========================================");


//2.sum of square numbers
let n1=5
let sum1=0
for(j=1;j<=n1;j++){
    sqno=j**2
    sum1=sum1+sqno
    // console.log(sqno);
}
console.log(sum1);
console.log("=========================================");

//3.sum of cubes
let n2=5
let sum2=0
for(k=1;k<=n2;k++){
    sqno1=k**3
    sum2=sum2+sqno1
    // console.log(sqno1);
}
console.log(sum2);
console.log("=========================================");

//4.power of a number
let n3=2
let power=5
mul=1
for(l=1;l<=power;l++){
    mul=mul*n3
    // console.log(mul);  
}
console.log(mul);
console.log("=========================================");

//5.febonacci series
let n7=10
let a=0
let b=1
for(x=1;x<=n7;x++){
     console.log(a);
     c=a+b
     a=b
     b=c   
}
console.log("=========================================");

//6.n terms in series 1,1/n,.....
let n4=4
// series=0
for(s=1;s<=n4;s++){
    if(s==1){
        console.log(s);
    }
    else{
        console.log("1/"+s);
    }
}
console.log("=========================================");

//7.display 1,11,111..
let n5=10
pattern=0
for(g=1;g<=n5;g++){
    pattern=pattern*10+1
    console.log(pattern);
}
console.log("=========================================");

//8.series 1,3,9,.........
let n6=7
mul1=1
for(u=1;u<=n6;u++){
    if(u==1){
        console.log("1");
    }else{
    mul1=mul1*3
    console.log(mul1);
    }
}
console.log("=========================================");

//9.divisible by 3 and 5
for(y=10;y<=150;y++){
    if(y%3==0&&y%5==0){
        console.log(y); 
    }
}
console.log("==================================");


//10.divisible by 7
for(z=200;z>=50;z--){
    if(z%7==0){
        console.log(z);
    }
}
console.log("=============================");


//11.Not divisible by 5
for(u=120;u>=20;u--){
    if(u%5!=0){
        console.log(u);
    }
}
console.log("==========================");


//12.average of even numbers
let count=0
sum=0
for(v=10;v<=100;v++){
    if(v%2==0){
        // console.log(v);
        // console.log(sum);
        // console.log(count);
        sum+=v
        count+=1
        average=sum/count
    }
}
console.log(average);
console.log("============================");

//13.average of factors
let fact=4
let count1=0
sum1=0
for(p=1;p<=fact;p++){
    if(fact%p==0){
        count1+=1
        sum1+=p
        Average=sum1/count1
    }
}
console.log(Average);
