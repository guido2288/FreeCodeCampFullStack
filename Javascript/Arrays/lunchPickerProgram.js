// Build a Lunch Picker Program

// In this lab, you'll build a program that helps in managing lunch options. You'll work with an array of lunches, add and remove items from the array, and randomly select a lunch option.

let lunches = [];

const addLunchToEnd = (lunchBox, lunchItem) => {
      lunchBox.push(lunchItem);
      console.log(`${lunchItem} added to the end of the lunch menu.`);
      return lunchBox;  
};

const addLunchToStart = (lunchBox, lunchItem ) => {
      lunchBox.unshift(lunchItem);
      console.log(`${lunchItem} added to the start of the lunch menu.`);
      return lunchBox;  
};

const removeLastLunch = (lunchBox) => {

      if(lunchBox.length == 0){
        return console.log("No lunches to remove.")
      };

      console.log(`${lunchBox[lunchBox.length - 1]} removed from the end of the lunch menu.`);
      lunchBox.pop();
      return lunchBox;  
};

const removeFirstLunch = (lunchBox) => {

    if(lunchBox.length == 0){
      return console.log("No lunches to remove.")
    };

    console.log(`${lunchBox[0]} removed from the start of the lunch menu.`);
    lunchBox.shift();
    return lunchBox;  
};

const getRandomLunch = (lunchBox) => {
    
    if(lunchBox.length == 0){
        return console.log("No lunches available.")
    }

    let randomNum = Math.floor(Math.random() * lunchBox.length);

    return console.log(`Randomly selected lunch: ${lunchBox[randomNum]}`);
};

const showLunchMenu = (lunchBox) => {

    if(lunchBox.length == 0){
        return console.log("The menu is empty.")
    };

    console.log(`Menu items: ${lunchBox.join(", ")}`)

}

showLunchMenu(["Stew", "Soup", "Toast"])