//priting sequence of numbers
let i=5
while(i<=10){
    console.log(i);
    i++
}
console.log("======================================");

//printing 3 multiples
let j=3
while(j<=12){
    console.log(j);
    j+=3
}
console.log("======================================");

//printing sequence in reverse
 k=10
while(k>=1){
    console.log(k);
    k--
}
console.log("=======================================");


//
let l=120
while(l>=60){
    console.log(l);
    l=l-20
}
console.log("========================================");

//removing last digits till it becomes 0
n=3424567
while(n!=0){
    ld=n%10
    // console.log(ld);
    n=parseInt(n/10)
    console.log(ld,n);
}
console.log("=====================================");


//count of digits in a number
let num=123
let count=0
while(num!=0){
    let ldi=num%10
    count+=1
    num=parseInt(num/10)
}
console.log(count);
console.log("====================================");

//sum of digits
let number=1234
sum=0
while(number!=0){
    last=number%10
    sum=sum+last
    number=parseInt(number/10)
}
console.log(sum);
console.log("====================================");

//reverse the number
let no=1234
let rev=0
while(no!=0){
    digit=no%10
    rev=rev*10+digit
    no=parseInt(no/10)
}
console.log(rev);
console.log("====================================");

//palindrome
let numb=121
let temp=121
let reverse=0
while(numb!=0){
    digit=numb%10
    reverse=reverse*10+digit
    numb=parseInt(numb/10)
}
console.log(reverse);
if(reverse===temp){
    console.log("palindrome");
}else{
    console.log("Not a palindrome");  
}
console.log("=========================================");


//printing even digitsw in a number
let num1=1234
let count1=0
while(num1!=0){
    digits=num1%10
    if(digits%2!=0){
        // console.log(digits); 
        count1+=1        
    } 
    num1=parseInt(num1/10)
}
console.log(count1);
console.log("=====================================");

//max digit in a number
let num2=123
let max=0
while(num2!=0){
    digit1=num2%10
    if(digit1>max){
        max=digit1
    }
    num2=parseInt(num2/10)
}
console.log(max);
console.log("=========================================");

//printing max nd secmax
let num3=123459
let maxm=0
let secmax=maxm
while(num3!=0){
    digit2=num3%10
    if(digit2>maxm){
        secmax=maxm
        maxm=digit2 
    }
    if(digit2<maxm && digit2>secmax){
       secmax=digit2
    }
    num3=parseInt(num3/10)
}
console.log(maxm,secmax);
console.log("=========================================");

//smallest digit in a number
let num4=123
let min=9
while(num4!=0){
    digit3=num4%10
    if(digit3<min){
        min=digit3
    }
    num4=parseInt(num4/10)
}
console.log(min);
console.log("=========================================");