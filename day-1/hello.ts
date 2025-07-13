function greetUserWithDate(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`);
}

greetUserWithDate("Nur", new Date());

let msg = "Hello, World!";

("use strict");

function greetUserWithDate(person, date) {
  console.log(
    "Hello ".concat(person, ", today is ").concat(date.toDateString())
  );
}
greetUserWithDate("Nur", new Date());

function greet(person, date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());
