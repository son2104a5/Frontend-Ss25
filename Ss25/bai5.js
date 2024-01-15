let n = +prompt("nhập 1 số nguyên dương");
let count=0, tmp;
while(n>0){
    tmp = n%10;
    if(tmp%2==0){
        count++;
    }
    n = Math.floor(n/10);
}
console.log(count);
