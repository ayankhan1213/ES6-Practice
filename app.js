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
//                  // 0  , 1
//     }
//     return acc
// }
// let result = reduce([1,2,3,4] , (acc,cur)=> acc + cur , 0) // 1
// console.log(result);


// const subjectEnglish = +prompt("Enter your English marks:", "Out of 100");
// const subjectMaths = +prompt("Enter your Maths marks:", "Out of 100");
// const subjectScience = +prompt("Enter your Science marks:", "Out of 100");
// const subjectHistory = +prompt("Enter your History marks:", "Out of 100");
// const subjectGeography = +prompt("Enter your Geography marks:", "Out of 100");
// const totalMarks = subjectEnglish + subjectMaths + subjectScience + subjectHistory + subjectGeography;
// const percentage = (totalMarks / 500) * 100;
// let grade;
// let valid = true;
// if (isNaN(subjectEnglish) || isNaN(subjectMaths) || isNaN(subjectScience) || isNaN(subjectHistory) || isNaN(subjectGeography)) {
//     alert("Error🤐")
//     valid = false
// }
// else if (
//     (subjectEnglish < 0 || subjectMaths < 0 ||
//         subjectScience < 0 || subjectHistory < 0 ||
//         subjectGeography < 0) ||
//     (subjectEnglish > 100 || subjectMaths > 100 ||
//         subjectScience > 100 || subjectHistory > 100 ||
//         subjectGeography > 100)
// ) {
//     alert("Marks should be between 0 and 100❌");
//     valid = false
// }
// else if (percentage >= 90 && percentage <= 100) {
//     grade = "A+";
// }
// else if (percentage >= 80 && percentage <= 90) {
//     grade = "A";
// }
// else if (percentage >= 70 && percentage <= 80) {
//     grade = "B";
// }
// else if (percentage >= 60 && percentage <= 70) {
//     grade = "C";
// }
// else if (percentage >= 50 && percentage <= 60) {
//     grade = "D";
// }
// else if (percentage >= 40 && percentage <= 50) {
//     grade = "E";
// }

// else if (percentage >= 0 && percentage <= 40) {
//     grade = "F";
// }

// if (valid) {
//     document.writeln(`English Marks: ${subjectEnglish} <br>`);
//     document.writeln(`Maths Marks: ${subjectMaths} <br>`);
//     document.writeln(`Science Marks: ${subjectScience} <br>`);
//     document.writeln(`History Marks: ${subjectHistory} <br>`);
//     document.writeln(`Geography Marks: ${subjectGeography} <br>`);
//     document.writeln(`Total Marks: ${totalMarks} <br>`);
//     document.writeln(`Percentage: ${percentage} <br>`);
//     document.writeln(`Grade: ${grade} <br>`);
// }

// let valid = true;
// function myReduce(data, callBack, initial) {
//     if (data.length === 0 && initial === undefined) {
//         alert("Inital Value Nahi hai or Length Zero hai.")
//         valid = false
//     }

//     let acc;
//     let start;

//     if (initial !== undefined) {
//         acc = initial;
//         start = 0
//     }
//     else {
//         acc = data[0]
//         start = 1

//     }

//     for (let i = start; i < data.length; i++) {
//         acc = callBack(acc, data[i])
//     }
//     return acc
// }
// if (valid) {
//     // let result = myReduce([1, 2, 3, 4], (acc, curr) => acc + curr, 0)
//     let value = myReduce([], (acc, curr) => acc + curr)
//     alert(value);

// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let left = 0;
// let right = arr.length - 1; // 9
// while (left < right) {
//     let save = arr[left]
//     arr[left] = arr[right];
//     arr[right] = save

//     left++
//     right--
// }

// function generate(name, email, type, orderId) {
//     if (type === "welcome") {
//         return `🎉Welcome ${email} 🎉 Hello ${name}, Welcome to our platform! Your account has been created with email: ${email} We are happy to have you with us 🚀 Regards, Team`;
//     }
//     if (type === "order") {
//         return `🛒 Order Confirmation 🛒 Hello ${name}, Your order has been confirmed Order ID: ${orderId} We will notify you once it is shipped 📦Thanks for shopping with us! Regards Team
//         `;
//     }
//     return "Invalid email type";

// }
