//1.Objects in JavaScript...
var msg="This is a Learning Page";
alert(msg);
let person = {              //Syntax: var_name={key1:value1,key2:value2,...nth key:nth val}
    name:"HariHaran",       //value for string should be declared inside double quotes "" or single quotes ''.
    age:19,                 //value for integer does not require any quotes.
    gender:"Male",
    dob:"23-05-2004",
    sibling:{
        brother:"NIL",
        sister:"Yazhini"
    }
}
alert(person.name);
console.log(person.sibling.sister);
console.log(person.dob);

let Array=["Bobby","Harish","Alpha"]
console.log(Array);
