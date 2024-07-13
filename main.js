// <====================== 13-07-24 =====================>
// <<--------------------- Revision ------------------------->>
// There are two ways to describe ("Hello World") in TypeScript...
// 1st way...
console.log("Hello World from Mahar Ahmad Sarfraz");
// 2nd way...
var msg = ("HelloWorld");
console.log(msg); // Value can be changed declared with let....
var message = ("Hello world from Ahmad Sarfraz");
console.log(message); // Value can't be changed bcoz it's constant
// <=============== Case Sensetive ===============>
// camelCase.
// snake_case.
// pascalCase.
// <========= Strong Typing ==========>
var userName = ("Mahar");
console.log(userName);
// userName = 37... Error this is not allowed to change the string value to number or boolean value...
// <============== Primitive Data Type =================>
var name1 = "Mahar Ahmad Sarfraz";
var age = 37;
var isStudent = true;
var email = "abcxyz@gmail.com";
console.log(name);
console.log(age);
console.log(isStudent);
console.log(email);
// <=========== Additional Primitive Data Type ============>
var a; // No value is assigned to the variable.
var b; // Any type of value, needs checking before use (TypeScript).
var c; // Very large Integer.
var d; // Very large Integer.
var e; // no value or empty.
// <============= Error ============>
// =>=>=>=>=> There are 3 types of errors in TypeScript <=<=<=<=<=<=<=
// 1. Syntax Error: Code not valid JavaScript.
// lett x: string = "SUBHAN ABDULLAH" // Syntax Error: Variable lett is used inspite of let. 
// 2. Type Error.
// let x: string = ("KARACHI");
// console.loger(x)  // Error: loger does not exist on type 'console'
// 3. Assignability Error.
// let z: number = "34" // Error: Type string is not assignable to type number 
// <============= String Concatenation ============>
var firstName = "Mahar Ahmad";
var lastName = "Sarfraz";
var fullName = firstName + " " + lastName;
console.log(fullName);
// <============= Template Literals ============>
var firstName1 = "Muhammad";
var lastName1 = "Ahmad Mujtaba";
var fullName1 = ("".concat(firstName1, " ").concat(lastName1));
console.log(fullName1);
// <============= Alhamdulillah day 1 Revision Assignment Completed ============>
