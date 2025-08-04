//Build a Pyramid Generator

// a -> string pattern to repeat 
// b -> integer number oof rows  
// c -> boolean 

function pyramid(a, b, c) {
    let resp = '';
    if (!c) {
        for (let i = 0; i < b; i++) {
            let spaces = " ".repeat(b - i - 1);
            let chars = a.repeat(i * 2 + 1)
            resp += spaces + chars + "\n"
        }
    } else {
        for (let i = b; i > 0; i--) {
            let spaces = " ".repeat(b - i);
            let chars = a.repeat(i * 2 - 1)
            resp += spaces + chars + "\n"
        }
    }
    return resp;
}


console.log(pyramid("o", 4, true));        
