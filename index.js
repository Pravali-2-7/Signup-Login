function signup(userName) {
    let users = ["pavani", "sravanthi", "likhitha", "pravalika"];

    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}


console.log(signup("Pravlika"));    
console.log(signup("Ramya"));      
