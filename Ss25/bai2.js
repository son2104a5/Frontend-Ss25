let a = +prompt("nhập số a");
let b = +prompt("nhập số b");
let et=0, ot=0;
if(b>a){
    for(let i=a;i<=b;i++){
        if(i%2==0){
            et += i;
        }else{
            ot += i;
        }
    }
}else{
    for(let i=b;i<=a;i++){
        if(i%2==0){
            et += i;
        }else{
            ot += i;
        }
    }
}
console.log(et);
console.log(ot);