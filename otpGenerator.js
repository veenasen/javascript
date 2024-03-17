function generateOtp()
{
    minm = 100000
    maxm = 999999
    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
}
console.log(generateOtp())

// let N=100;
// let random = Math.random()*N;
// console.log(random);

let N=100;
let random = Math.random()*N;
console.log(Math.floor(random));