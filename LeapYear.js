// Leap Year
// Method : Functional Call & Conditional Statements

function LeapYear()
{
    if((year % 4 == 0) && (year % 100 !=0) || (year % 400 ==0))
    {
        console.log(year + "Is a Leap Year");
    }
    else{
        console.log(year + "Is Not a Leap Year");
    }
}

const year=prompt("Enter the Year:");

LeapYear(year);