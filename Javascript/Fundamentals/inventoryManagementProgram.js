let inventory = [
    {name: "flour", quantity: 5}
];


function findProductIndex( product = "" ) { 
    let index = inventory.findIndex((e) => e.name.toLowerCase() === product.toLowerCase() );
    return index;
};

function addProduct( product = {} ) {
    
    let index = findProductIndex(product.name);

    if(index >= 0){
        let productToUpdate =  { 
            name:inventory[index].name,
            quantity: inventory[index].quantity + product.quantity
        } 
        inventory[index] = productToUpdate;
        console.log( `${inventory[index].name} quantity updated`)
    }else{
        let newProduct = {
            name: product.name.toLowerCase(),
            quantity: product.quantity
        }
        inventory.push(newProduct);
        console.log(`${newProduct.name} added to inventory`)
    }

};

function removeProduct(product = "" , quantity = 0) {
    
    let index = findProductIndex    (product);

    if(index < 0) return console.log(`${product} not found`)

    let newAmount = inventory[index].quantity - quantity;

    if(newAmount > 0) {
        inventory[index] = { name:product, quantity: newAmount };
        return console.log(`Remaining ${product} pieces: ${newAmount}`);
    };

    if(newAmount == 0) {
        inventory = inventory.filter( item => item.name !== product )
    };

    if(newAmount < 0) {
        return console.log(`Not enough ${product} available, remaining pieces: ${inventory[index].quantity}`)
    }

}

addProduct({name: "FLOUR", quantity: 5})

console.log(inventory)

