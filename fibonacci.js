Fibonacci=function()
{
    var n1=0
    var n2=1
    var n3,i,count=10
    
    console.log(n1)
    for(i=1;i<count;++i)
    {
        n3=n1+n2
        console.log(n3)
        n1=n2
        n2=n3
    }
}
Fibonacci()