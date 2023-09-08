// Voter Age Validity Using JavaScript .
// Method : Windows Prompt
// Syntax : let Var_name=prompt("Enter Something:");

var input=prompt("This page requires age verification.Please Enter Your Age:");
var Age=parseInt(input);
if(Age>=18){
    alert("Permission Granted");
}
else{
    alert("Permission Denied!!!")
}