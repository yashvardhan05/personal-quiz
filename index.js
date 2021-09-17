var readlineSync = require('readline-sync');
const chalk = require("chalk");

var score = 0;

var questionOne = "Q1: Am i older than 25?";
var answerOne = "no"


var myAge = readlineSync.question(questionOne + " ");

console.log ("Ans: you Entered " + myAge);

if(myAge==answerOne){
  console.log("you're Right")
  score = score +1;
  console.log("Your Score is : " + score);
}else{
  console.log("you're wrong")
  score = score -1;
   console.log("Your Score is : " + score);
}


//___-----_________-------


var questionTwo = "Q2: Do i like eggs?";
var answerTwo = "no"

var myAge = readlineSync.question(questionTwo + " ");


console.log ("Ans: you Entered " + myAge);

if(myAge==answerTwo){
  console.log("you're Right")
  score = score +1;
  console.log("Your Score is : " + score);
}else{
  console.log("you're wrong")
  score = score -1;
   console.log("Your Score is : " + score);
}



//-----------------//

var questionThree = "Q3 : Am i cricket Fan boy?";
var answerThree = "yes"

var myAge = readlineSync.question(questionThree + " ");


console.log ("Ans: you Entered " + answerThree);

if(myAge==answerThree){
  console.log("you're Right")
  score = score +1;
  console.log("Your Score is : " + score);
}else{
  console.log("you're wrong")
  score = score -1;
   console.log("Your Score is : " + score);
}

//---------------------//

var questionFour = "Q4: Is Tarak Mehta ka Oolta chashma my favourite serial?";
var answerFour = "yes"

var myAge = readlineSync.question(questionFour + " ");


console.log ("Ans: you Entered " + answerFour);

if(myAge==answerFour){
  console.log("you're Right")
  score = score +1;
  console.log("Your Score is : " + score);
}else{
  console.log("you're wrong")
  score = score -1;
   console.log("Your Score is : " + score);

  
}

//-----------------//
var questionFive = "Is RCB my favourite IPL team?";
var answerFive = "yes"

var myAge = readlineSync.question(questionFive + " ");


console.log ("You Entered " + answerFive);

if(myAge==answerThree){
  console.log("you're Right")
  score = score +1;
  console.log("Your Score is : " + score);
}else{
  console.log("you're wrong")
  score = score -1;
   console.log("Your Score is : " + score);
}

//use of Chalk
console.log(chalk.green("Yayyyy! You comepleted this quiz and your final score is: ")+ score);




