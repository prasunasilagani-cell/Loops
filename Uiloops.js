function Febonacci(){
    let n=parseInt(document.getElementById("n").value)
    let a=0
    let b=1
    let result=" "
    for(let i=1;i<=n;i++){
        result=result+a+" "
        let c=a+b
        a=b
        b=c
    }
    document.getElementById("result1").value=result
}
   
function Sum(){
    let m=parseInt(document.getElementById("n1").value)
    let sum=0
    for(let j=1;j<=m;j++){
        sum+=10
        document.getElementById("result2").value=sum
    }
}

function Add(){
    let p=parseInt(document.getElementById("n2").value)
    let Add=0
    for(let k=1;k<=p;k++){
        Add+=k
        document.getElementById("result3").value=Add
    }
}

function Table(){
    let table=parseInt(document.getElementById("n3").value)
    let result1=" "
    for(l=1;l<=10;l++){
        result1=result1+table+" X "+l+" = "+table*l+" ";
        document.getElementById("result4").value=result1
    }
}

function Factorial(){
    let q=parseInt(document.getElementById("n4").value)
    let fact=1
    for(r=q;r>=1;r--){
        fact*=r
    }
    document.getElementById("result5").value=fact
}