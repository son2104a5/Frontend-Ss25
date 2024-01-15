let n = +prompt("nhập số n");
let sum=0;
for(let i=0;i<=n;i++){
    console.log(i+1);
    if(sum%2!=0&&i==n-1){
        break;
    }else{
        sum += i;
    }
}
console.log(sum);