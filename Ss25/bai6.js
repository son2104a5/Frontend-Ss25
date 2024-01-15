let n = +prompt("nhập 1 số tự nhiên");
let i=0, f1=0, f2=0,f=1;
while(i < n-1){
    i++;
    f2=f1;
    f1=f;
    f=f1+f2;
}
console.log(f);