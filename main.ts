

// <====================== 13-07-24 =====================>
// <<--------------------- Revision ------------------------->>

// There are two ways to describe ("Hello World") in TypeScript...
// 1st way...

console.log("Hello World from Mahar Ahmad Sarfraz")

// 2nd way...
let msg: string = ("HelloWorld");
console.log(msg); // Value can be changed declared with let....

const message: string = ("Hello world from Ahmad Sarfraz")
console.log(message);   // Value can't be changed bcoz it's constant

// <=============== Case Sensetive ===============>

// camelCase.
// snake_case.
// pascalCase.

// <========= Strong Typing ==========>

let userName: string = ("Mahar");
console.log(userName)
// userName = 37... Error this is not allowed to change the string value to number or boolean value...

// <============== Primitive Data Type =================>

let name1: string = "Mahar Ahmad Sarfraz";
let age: number = 37;
let isStudent: boolean = true;
let email: any = "abcxyz@gmail.com"

console.log(name)
console.log(age);
console.log(isStudent);
console.log(email);

// <=========== Additional Primitive Data Type ============>

let a: undefined; // No value is assigned to the variable.
let b: unknown; // Any type of value, needs checking before use (TypeScript).
let c: bigint; // Very large Integer.
let d: symbol; // Very large Integer.
let e: null; // no value or empty.

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

let firstName: string = "Mahar Ahmad";
let lastName: string = "Sarfraz";

let fullName: string = firstName + " " + lastName;
console.log(fullName);

// <============= Template Literals ============>

let firstName1: string = "Muhammad";
let lastName1: string = "Ahmad Mujtaba";

let fullName1: string = (`${firstName1} ${lastName1}`)
console.log(fullName1);

// <============= Alhamdulillah day 1 Revision Assignment Completed ============>
