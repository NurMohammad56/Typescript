"use strict";
// number
// let userId: number = 34784.43;
Object.defineProperty(exports, "__esModule", { value: true });
// boolean
// let isLoggedIn: boolean = true;
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, password, isPaid) {
    console.log("User signed up with name: ".concat(name, ", email: ").concat(email, ", password: ").concat(password, ", isPaid: ").concat(isPaid));
    return true;
}
var loginUser = function (name, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("D5");
signUpUser("John Doe", "john@example.com", "password123", true);
loginUser("Jane Doe", "password456");
