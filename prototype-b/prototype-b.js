// declaration des variables 
var btn;
var output;
var number;
var input;

 // entrer: saiser 
 btn = document.getElementById('btn');
  output = document.getElementById('outputtext');
 number = [Math.floor(Math.random() * 100)]

 // traitement 
btn.addEventListener('click', function(){
  input = document.getElementById('userInput').value;
  if (input == number){
    output.innerHTML = 'you guessed right'
  } else if (input < number){
    output.innerHTML = "you guessed to low!"
  };
  if (input > number){
    output.innerHTML = "you guessed too high!"
  }

});






           