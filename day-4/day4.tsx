// number
// let userId: number = 34784.43;

// boolean
// let isLoggedIn: boolean = true;

function addTwo(num: number) {

  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}


function signUpUser(name: string, email: string, password: string, isPaid: boolean) {
  console.log(`User signed up with name: ${name}, email: ${email}, password: ${password}, isPaid: ${isPaid}`);
  return true;
}



let loginUser = (name: string, password: string, isPaid: boolean = false) => { }

addTwo(5);
getUpper("D5");

signUpUser("John Doe", "john@example.com", "password123", true);

loginUser("Jane Doe", "password456");

export { }
