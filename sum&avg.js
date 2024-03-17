ENG=70
TAM=85
MAT=70
SCI=75
SS=80
sum=ENG+TAM+MAT+SCI+SS
avg=sum/5
console.log("TOTAL : ",sum)
console.log("AVERAGE : ",avg)

if(avg>=80 && avg<=100)
{
    console.log("GRADE : A (PASS)")
}
else if(avg>=50 && avg<=79)
{
    console.log("GRADE : B (PASS)")
}
else if(avg>=35 && avg<=49)
{
    console.log("GRADE : C (PASS)")
}
else if(avg>=0 && avg<=34)
{
    console.log("GRADE : F (FAIL)")
}
