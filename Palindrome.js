// Palindrome
// Method : Function call

function Palindrome()
{
    const len=String.length;
    for(let i=0;i<len/2;i++)
    {
        if(String[i]!==String[len-1-i])
        {
            alert("Not a Palindrome");
        }
    }
    alert("Palindrome");
}

const String=prompt("Enter the String or Number:");

const result=Palindrome(String);

console.log(result);
