// function greetUserWithDate(person: string, date: Date) {
//   console.log(`Hello ${person}, today is ${date.toDateString()}`);
// }
// greetUserWithDate("Nur", new Date());
// let msg = "Hello, World!";
// ("use strict");
// function greetUserWithDate(person, date) {
//   console.log(
//     "Hello ".concat(person, ", today is ").concat(date.toDateString())
//   );
// }
// greetUserWithDate("Nur", new Date());
// function greet(person, date) {
//   console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
// greet("Maddison", new Date());
function printId(id) {
    console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });
