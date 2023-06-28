function Check(){
// var num1;
// var num2;
// var result;

const num1 = parseInt( document.getElementById(" Num1 ").value);
console.log(num1);

const num2 = parseInt( document.getElementById(" Num2 ").value);
console.log(num2);

if(num1 > num2){
    document.getElementById( " Value ").innerHTML= `${num1} is greater than   ${num2} `
}else if(num1 === num2){
    document.getElementById( " Value ").innerHTML=`${num1} & ${num2} is equal `
}else{
    document.getElementById(" Value ").innerHTML=`${num1}  is less than ${num2}`
}
};
