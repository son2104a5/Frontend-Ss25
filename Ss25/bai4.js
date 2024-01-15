let n = +prompt("nhập số n");
let ans=0, sum=0;
for(let i=1;i<=n;i++){
    ans = ans * 10 + i;
    sum += ans;
}
console.log(sum);