factorial=(n)=>
{
    var fact=1,i
    for(i=1;i<=n;i++)
    {
        fact=fact*i
    }
    console.log(`Factorial of ${n} is ${fact}`)
}
factorial(5)

