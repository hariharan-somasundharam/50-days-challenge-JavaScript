// Palindrome
// Method : Function call

function palindrome(str){
    var reg=/[\W_]/g;
    var smallStr=str.toLowerCase().replace(reg,"");
    var reverse=str.split().reverse().join("");
    if(reverse===str) return true;

    return false;
}
palindrome("Amma");