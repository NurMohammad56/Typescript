// function printId(id: number | string) {
//   console.log("Your ID is: " + id);
// }
// // OK
// printId(101);
// // OK
// printId("202");
// function printTextOrNumberOrBool(
//   textOrNumberOrBool: string | number | boolean
// ) {
//   console.log(textOrNumberOrBool);
// }
// printTextOrNumberOrBool("Hello, World!");
// printTextOrNumberOrBool(42);
// printTextOrNumberOrBool(true);
// function printId(id: number | string) {
//   console.log(id.toLocaleString);
// }
// function printId(id: number | string) {
//   if (typeof id === "string") {
//     console.log("Your Id is " + id.toUpperCase());
//   } else {
//     console.log("Your Id is " + id);
//   }
// }
// function welcomePeople(x: string[] | string) {
//   if (Array.isArray(x)) {
//     console.log("Hello, " + x.join(" and "));
//   } else {
//     console.log("Hello, " + x);
//   }
// }
function getFirstThree(x) {
    return x.slice(0, 3);
}
getFirstThree([1, 2, 3, 4, 5]);
getFirstThree("Hello, World!");
