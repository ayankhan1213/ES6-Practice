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

// let result = generate("Ayan" , "aw1800@gmail.com" , "order" , 1234)
// let result2 = generate("Khan" , "aw18002@gmail.com" , "welcome" , 1221)
// alert(result)
// alert(result2)

// Wrong way to Code
// function getValue(i) {
//     return i * 2;
// }
// for(let i = 0; i<10000; i++){
//     let value = `${getValue(i)}`
//     console.log("Value is " + value); 
// }

// function getValue(i) {
//     return i * 2;
// }
// for(let i = 0; i<10000; i++){
//     let value = getValue(i)
//     console.log("Value is " + value); 
// }

// Proper Way to write Code 

// Simple Functionality Bell Icon
// document.querySelector("button").addEventListener("click", () => {
//     let span = document.querySelector("span")
//     span.textContent++
//     if (span.textContent > 5) {
//         document.querySelector(".icon").innerHTML = `🔊<span>${span.textContent}</span>`
//         span.textContent++
//     }
// })

// Swapping From For Loop

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let str = 0;
// let end = arr.length - 1

// for (let i = str; str < end; (str++ , end--)){
//     let save = arr[str];
//     arr[str] = arr[end];
//     arr[end] = save
// }
// console.log(arr);


// Converting into UpperCase
// let arr = ["ayan" , 'khan' , 'yousuf' , 'sameer' , 'bilawal']
// let ans = arr.map((newArr)=>{
//     return newArr.toUpperCase()
// })



// let result = generate("Ayan" , "aw1800@gmail.com" , "order" , 1234)
// let result2 = generate("Khan" , "aw18002@gmail.com" , "welcome" , 1221)
// alert(result)
// alert(result2)

// Wrong way to Code
// function getValue(i) {
//     return i * 2;
// }
// for(let i = 0; i<10000; i++){
//     let value = `${getValue(i)}`
//     console.log("Value is " + value); 
// }

// function getValue(i) {
//     return i * 2;
// }
// for(let i = 0; i<10000; i++){
//     let value = getValue(i)
//     console.log("Value is " + value); 
// }

// Proper Way to write Code 

// Simple Functionality Bell Icon
// document.querySelector("button").addEventListener("click", () => {
//     let span = document.querySelector("span")
//     span.textContent++
//     if (span.textContent > 5) {
//         document.querySelector(".icon").innerHTML = `🔊<span>${span.textContent}</span>`
//         span.textContent++
//     }
// })

// Swapping From For Loop

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let str = 0;
// let end = arr.length - 1

// for (let i = str; str < end; (str++ , end--)){
//     let save = arr[str];
//     arr[str] = arr[end];
//     arr[end] = save
// }
// console.log(arr);


// Converting into UpperCase
// let arr = ["ayan" , 'khan' , 'yousuf' , 'sameer' , 'bilawal']
// let ans = arr.map((newArr)=>{
//     return newArr.toUpperCase()
// })


// Q1
// function power(a,b){
//     return a**b
// }

// let res = power(2,4)
// console.log(res);

// Q2
// let leapYear = +prompt("Enter to check Leap Year " , "e.g 2016")
// if((leapYear % 4 === 0 && leapYear % 100 !== 0 ) || leapYear % 400 === 0){
//     alert(`${leapYear} is a Leap Year`)
// }else{
//     alert(`${leapYear} is not a Leap Year`)
// }

// Q3
// function sides(a,b,c) {
//     return (a + b + c) / 2
// }
// function area(a,b,c){
//     let S = sides(a,b,c);
//     let are = Math.sqrt(S *(S-a) * (S-b) * (S-c))
//     return are
// }

// let a = 12 , b = 13 , c = 14;
// let res = area(a,b,c);
// console.log(`Area of Triangle is ${res}`);


// let count = 0
// function plus(){
//     let getCounter = document.querySelector("#counter")
//     getCounter.innerHTML = ++count
// }

// function minus(){
//     let getCounter = document.querySelector("#counter")
//     getCounter.innerHTML = --count
// }


// function hover(){
//     let getImg = document.querySelector("#img")
//     getImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZExXZfuy_mIpsM-T69cjwfWlNiY8MJK_shQ&s"
// }

// function mouseOut(){
//     let getImg = document.querySelector("#img")
//     getImg.src = "https://img.freepik.com/free-photo/green-trees-near-body-water-daytime_395237-20.jpg?semt=ais_hybrid&w=740&q=80"
// }

// function deleteVowels(sen){
//     let vowels = "aeiouAEIOU"
//     let res = ""
//     for(let i = 0; i<sen.length; i++){
//         if(!vowels.includes(sen[i])){
//             res += sen[i]
//         }        
//     }
//     console.log(res);

// }
// deleteVowels("Please read this application and give me gratuity")

// function calc(word){
//     let find = "l"    
//     for(let i = 0; i<word.length; i++){
//         if(word[i] === find){
//            return i          
//         }
//     }
//         return -1
// }
// let ans = calc("Hello")
// console.log(ans);


// function check(sen) {
//     let count = 0;
//     let pairs = []

//     for (let i = 0; i < sen.length - 1; i++) {
//         switch (sen[i].toLowerCase()) {
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//                 switch (sen[i + 1].toLowerCase()) {
//                     case "a":
//                     case "e":
//                     case "i":
//                     case "o":
//                     case "u":
//                         count++;
//                         pairs.push(sen[i] + sen[i + 1]);
//                         break;
//                 }
//                 break;
//         }
//     }
//     console.log("Total Vowels: " + count);
//     return pairs;
// }

// let ans = check("Please read this application and give me gratuity");
// console.log(ans);
// console.log(count);


// let distance = +prompt("Enter distance between two cities in km:");

// function toMeters(km) {
//     return km * 1000;
// }
// function toCentimeters(km) {
//     return km * 100000;
// }
// function toFeet(km) {
//     return km * 3280.84;
// }
// function toInches(km) {
//     return km * 39370.1;
// }

// console.log("Distance in meters: " + toMeters(distance));
// console.log("Distance in centimeters: " + toCentimeters(distance));
// console.log("Distance in feet: " + toFeet(distance));
// console.log("Distance in inches: " + toInches(distance));


// let hoursWorked = parseInt(prompt("Enter total hours worked by employee"));
// let overtimeHours = 0;
// let overtimeRate = 12; 

// if(hoursWorked > 40){
//     overtimeHours = hoursWorked - 40;
// }

// let overtimePay = overtimeHours * overtimeRate;

// console.log(`Total Hours: ${hoursWorked}`);
// console.log(`Overtime Hours: ${overtimeHours}`);
// console.log(`Overtime Pay: ${overtimePay}`);

// let curr = +prompt("Enter the amount to withdraw")
// if (curr % 10 !== 0) {
//     console.log(`Withdraw Multiple ho 10`);
// } else {
//     let hund = Math.floor(curr / 100)
//     let remain = curr % 100

//     let fif = Math.floor(remain / 50)
//     remain = curr % 50

//     let ten = Math.floor(remain / 10)
//     remain = curr % 10

//     console.log(`100 notes: ${hund}`);
//     console.log(`50 notes: ${fif}`);
//     console.log(`10 notes: ${ten}`);
// }


// function func(){
//     alert("Hello!")
// }

// function myFunc(){
//     alert(`Thanks for Purchasing Mobile For Us.`)
// }


let students = ["Harry", "Brake", "Oscar", "Pops", "Snake"];
let classes = [4, 9, 12, 5, 2];

let table = document.getElementById("studentTable");

function showStudents() {
    table.innerHTML = `
        <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Class</th>
            <th>Action</th>
        </tr>
    `;

    for (let i = 0; i < students.length; i++) {
        let row = table.insertRow();
        row.insertCell(0).innerText = i + 1;
        row.insertCell(1).innerText = students[i];
        row.insertCell(2).innerText = classes[i];

        let btn = document.createElement("button");
        btn.innerText = "Delete";
        btn.onclick = function() {
            students.splice(i, 1);
            classes.splice(i, 1);
            showStudents();
        };
        row.insertCell(3).appendChild(btn);
    }
}

showStudents();


// Q1
// let fName = prompt("Enter the First Name")
// let lName = prompt("Enter the Last Name")
// let fullName = ""
// console.log(`Hello ${fName + "" +  lName}`);


// Q2
// let user = prompt("Enter you Mobile Model")
// console.log(`My favourite phone is ${user} \n Length of String is ${user.length}`);

// Q3
// let word = "Pakistani"
// console.log(word.indexOf("n"));  // 7

// Q4
// let word = "Hello World"
// console.log(word.lastIndexOf("l")); // 9

// Q5
// let word = "Pakistani"
// console.log(word.slice(3,4));

// Q6
// let fName = prompt("Enter the First Name")
// let lName = prompt("Enter the Last Name")
// let fullName = fName.concat(" " ,lName)
// console.log(fullName);

// Q7
// let word = "Hyderabad"
// console.log(word);
// word = word.replace("Hyder" , "Islam")
// console.log(word);

// Q8
// let sentence = "Ali and Sami are best friends. They play cricket and football together."
// console.log(sentence.replaceAll("and" , "&"));

// Q9
// let num = "472"
// console.log(typeof num);
// num = 472
// console.log(typeof num); // After Update String Into Number

// Q10
// let user = prompt("Enter Anything")
// console.log(user.toUpperCase());

// Q11
// var word = prompt("Enter anthing")
// var a = word.slice(0,1).toUpperCase()
// var b = word.slice(1).toLowerCase()
// var c = a + b;
// alert(c)

// Q12
// let num = 25.26;
// console.log(num);
// num = "25.26"
// let res = num.replace("." , "")
// console.log(res);  /// 2526


// Q13
// let user = prompt("Enter your UserName")
// let mf = false;
// for(let i = 0; i<user.length; i++){
//     let a = user.charCodeAt(i);
//     if(a===33||a===44||a===64||a===46){
//         alert(`Enter a Valid Password`)
//         mf = true;
//         break;
//     }
// }
// if(!mf){
//     alert(user)
// }
// Q14
// let user = prompt("Welcome to ABC Bakery" , "What do you want to order Sir?").toLowerCase()
// let arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var mf = false
// for (var i = 0; i < arr.length; i++) {
//     if(arr[i] === user){
//         mf = true;
//         break;
//     }
// }
// if(mf){
//     alert(`${arr[i]} is available at Index ${i} in our Bakery.`)
// }else{
//     alert(`${user} is not available in our Bakery.`)
// }


// Q15
// let username = prompt("Enter Username")

// let first = username.charCodeAt(0)
// console.log(first);

// if (first >= 48 && first <= 57) {
//     console.log("Username cannot begin with a number");
// }

// for (let i = 0; i < username.length; i++) {

//     let char = username.charCodeAt(i)

//     if ((char >= 33 && char <= 47) ||
//         (char >= 58 && char <= 64) ||
//         (char >= 91 && char <= 96) ||
//         (char >= 123 && char <= 126)) {
//         console.log(`Enter a Valid Password`);

//     }

// }
// if (username.length >= 6) {
//     console.log(username);

// } else {
//     console.log("Error: Username must be at least 6 characters");

// }


// Q16
// let word = "University of Karachi";
// console.log(word.split("").join("\n"));

// Q17
// let word = prompt("Enter your Name")
// console.log(word.at(-1));

// Q18
// let sentence = "The quick brown fox jumps over the lazy dog";
// let word = "the"
// sentence = sentence.toLowerCase()
// let split = sentence.split(" ");
// let count = 0;

// for(let i = 0; i<split.length;i++){
//     if(split[i]===word){
//         count++;
//     }
// }
// console.log(`${sentence} \n Occurences of Word the is ${count}` )
