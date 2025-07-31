// Build a Leap Year Calculator

// A leap year is a year that is divisible by 4, except for years that are divisible by 100 and not divisible by 400. For example, 2000 is a leap year, but 1900 is not. Also, a leap year has an extra day in February, which is the 29th day of the month.

const isLeapYear  = (year) => {
    if(year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0) ){
        return `${year} is a leap year.`;
    }else{
        return `${year} is not a leap year.`;
    }       
};

let year = 1900 ;
let result = isLeapYear(year);
console.log(result);