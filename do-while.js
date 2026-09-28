let i=5
let sum=0
do{
    sum+=i
    i++
}while(i<=10)
    console.log(sum);

//Checking even or odd by using prompt  
let ans="" 
do{
    let n=parseInt(prompt("Enter a number to check even or odd"));
    if(n%2==0){
        alert("Even")
    }
    else{
        alert("Odd")
    }
    ans=prompt("Do you want to check another number?(y/n)")
}   
while(ans=="y")