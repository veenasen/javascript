// function number(n=0)
// {
//     if(n>0)
//     {
//         console.log("number is positive")
//     }
//     else if(n<0)
//     {
//         console.log("number is negative")
//     }
//     else
//     {
//         console.log("number is zero")
//     }
// }
// number()


function EBill(unit)
{
    if(unit>=100 && unit<500)
    {
        console.log("amount : 300")
    }
    else if(unit>=500 && unit<=1000)
    {
        console.log("amount : 600")
    }
}
EBill(500)