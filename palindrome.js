palindrome=()=>
{
    var n=434
    var r
    var sum=0
    var temp

    temp=n
    while(n>0)
    {
        r=n%10
        sum=(sum*10)+r
        n=n/10
    }
if(temp==sum)
{
    console.log("It is Palindrome")
}
else
{
    console.log("Not a Palindrome")
}
}
palindrome()
        
