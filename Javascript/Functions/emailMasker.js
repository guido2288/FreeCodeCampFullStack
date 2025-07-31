
// Build an Email Masker
// In this lab, you will mask the username part of an email address with asterisks. Masking is a term used to hide or replace sensitive information with asterisks or other characters.

// For example, if the email address was myEmail@email.com, then the masked email address will be m*****l@email.com.

const maskEmail = (email = "") => {
    let index = email.indexOf("@");
    let username = email.slice(1,index - 1);
    let masked = "*".repeat(username.length)

    return email.replace(username, masked);
};

let email = "apple.pie@example.com";

console.log(maskEmail(email));