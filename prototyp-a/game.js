var randomNumber =Math.floor(Math.random()*101);

var userInput = prompt("deviner un nombre entre 1 et 100");
var winMessage = "Félicitations, vous avez gagné après";
var lostMessage = "c'est rate !!";

var itisSmall = "c'est plus petit que " + userInput + ",essayez"
var itisBigger = "c'est plus grand que " + userInput + ",essayez"

function isCorrect() {
    if (userInput==randomNumber){
        result = winMessage;
    } else if (userInput>randomNumber){
        result = itisSmall
    }else if (userInput<randomNumber){
        result = itisBigger
    }
    console.log(result)
}
isCorrect()