
function generatePasword( passwordSize ) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    let count = 0;

    while (count < passwordSize) {
        let randomNumber = Math.floor(Math.random() * alphabet.length);
        password +=  alphabet[randomNumber];
        count++
    }

    return password;
    
};

toString


let password = generatePasword(10);
console.log(`Generated password: ${password}`);