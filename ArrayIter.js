// Array Iterations in JavaScript.
// Syntax : forEach()

const Array=[8,7,4,13,74,88,44];
let ArrayElements="";
Array.forEach(myfunction);
document.getElementById("demo").innerHTML=ArrayElements;

function myfunction(value)
{
    ArrayElements+=value+"<br>"
}

// Array Map function
// Syntax : array_name.map(func_name)

const Array2=Array.map(myfunction2)
document.getElementById("demo1").innerHTML=Array2;

function myfunction2(value,index,array)
{
    return value*2 ;
}

// Array flatmap function
// Syntax : array_name.flatmap(Expression)
// Note: Requires No function

const Array3=Array.flatMap((x) => x*3);
document.getElementById("demo2").innerHTML=Array3;

// Array Filters
// Syntax : array_name.filter(func_name)

const Array4=Array.filter(myfunction3)
document.getElementById("demo3").innerHTML=Array4;

function myfunction3(value,index,array)
{
    return value > 4
}

const Array5=Array.filter(myfunction3_1)
document.getElementById("demo4").innerHTML=Array5;

function myfunction3_1(value,index,array)
{
    return value < 74
}

// Array Reduce
// Syntax : array_name.reduce(func_name)

let sum=Array.reduce(myfunction4)
document.getElementById("demo5").innerHTML=sum;

function myfunction4(total,value,index,array)
{
    return total+value;
}