//Build a Gradebook App

const array = [1, 2, 3, 4];

function getAverage(test) {
  
    let averageScore = test.reduce( (acc, current) => acc + current, 0 )

    return averageScore / test.length;

};

function getGrade (score) {
    let range = "";

    if(score <= 59 && score >= 0){
        range = "F"
    }else if(score <= 69 && score >= 60){
        range = "D"
    }else if(score <= 79 && score >= 70){
        range = "C"
    }else if(score <= 89 && score >= 80){
        range = "B"
    }else if(score <= 99 && score >= 90){
        range = "A"
    }else{
        range = "A+"
    }

    return range
};

function hasPassingGrade(score) {

    let grade = getGrade(score);

    if(grade === "F"){
        return false
    }else{
        return true 
    }
};

function studentMsg(scoresArr , scoresStudent) {

    let average = getAverage(scoresArr);
    let grade = getGrade(scoresStudent);

    return `Class average: ${average}. Your grade: ${grade}. You ${hasPassingGrade(scoresStudent) ? "passed" : "failed" } the course.`;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));