// let price = 100;
// {
//   let price = 200;
// }
// console.log(price);


// var price = 100;
// {
//   var price = 200;
// }
// console.log(price);


// const username = {
//     name : "Ayan",
//     age : 18,
//     isLoggedIn : false,
// }

// username.name = "Khan"
// console.log(username);


// const items = [1, 2, 3, 4, 5]
// items.push(6)
// console.log(items); 


// E-commerce app me product price store karna hai.
// Kaunsa use hoga: let ya const? aur kyun? 
// Reason kyunke items or uske Price Kabhi bhi Change hoskte hain

// User ka login status change hota rehta hai. Best choice? (Let)

// API se aaya hua user object modify kar sakte ho ya nahi? (const hone ke bawajood) (Yes) b/c not change the Object only change properies of Object

// Cart items list store karni hai. Best choice? (Let)

// Tum ek config file bana rahe ho (API URL, keys). kya use karoge? (Const)

// Loop counter (for loop) me kya use karna chahiye aur kyun?
// (Let) change again and again


// React/MERN apps me mostly var kyun avoid hota hai? kyunke wo redelcared hojata hai to agr pele se koi code run kr rha hoga uske naam se to wo nahi chalega kyunke variable ab neeche uske naam se bangya to wo eliminate hojayega almost

// Developer ne var use kiya aur value overwrite ho gayi — problem kya thi? Wo Variable Jo usne Upar banaya hai wo nahi chalega neeche wala active hojayga

// Kya const ka matlab hai “immutable data”? explain in real sense (Yes)

// Block scope ka real use case kya hota hai frontend apps me? (in simple Words Private Variables)




// let arr = [1, 2, 3, 4];

// let sum = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(sum);

// function reduce(arr , call , val){
//     if(arr.length === 0 && val  === undefined){
//         alert("Array empty hai aur initial value nahi di")
//     }
//     let acc;
//     let start;

//     if(val !== undefined){
//         acc = val;
//         start = 0
//     }
//     else{
//         acc = arr[0]
//         start = 1
//     }

//     for(let i = start ; i<arr.length; i++){
//         acc = call(acc , arr[i])
//     }
//     return acc
// }
// let result = reduce([1,2,3,4] , (acc,cur)=> acc + cur , 0)
// console.log(result);
