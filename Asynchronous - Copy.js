// function greet()
// {
//     console.log("Welcome All..!!!")
// }
// setTimeout(greet,3000)
// console.log("Training Institute")
// console.log("Javscript Class")

//CALL BACK HELL

// setTimeout(()=>{
//     console.log("3 seconds")
//     setTimeout(()=>{
//         console.log("6 seconds")
//         setTimeout(()=>{
//             console.log("9 seconds")
//         },3000)
//     },3000)
// },3000)


//PROMISE

// let count=true
// const promisecheck=new Promise(function(resolve,reject){
//     if (count==true){
//         resolve("The program runs successfully")
//     }
//     else
//     {
//         reject("The program is not running")
//     }
// })
// console.log(promisecheck)


function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }
  asyncCall();