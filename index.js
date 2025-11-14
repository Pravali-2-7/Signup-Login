function signup(userName) {
    let users = ["pavani", "sravanthi", "likhitha", "pravalika"];

    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}

function login(userName, password) {
    let users = ["pavani", "sravanthi", "likhitha", "pravalika"];

    if (users.includes(userName)) {
        if (password === "Emp@123") {
            return "Login Successful...";
        } else {
            return "Wrong Password....";
        }
    } else {
        return "User Not Found, Please Signup";
    }
}

console.log(signup("Pravalika"));  
console.log(login("pavani", "Emp@123")); 
console.log(login("pavani", "1234"));   
console.log(login("hima", "Emp@123"));   
