// declaration des variables 
var btn;
var output;
var number;
var nombreDeviner;
var attempt;

 // entrer: saiser 
 btn = document.getElementById('btn');
 output = document.getElementById('outputtext');
 number = Math.floor(Math.random() * 100);
 attempt =10;
 // traitement 

btn.addEventListener('click', function(){
  attempt =attempt -1 ;//attempt--
  nombreDeviner = document.getElementById('userInput').value;
  if (nombreDeviner == number){
    output.innerHTML = 'Correct'
  } else{
    if (nombreDeviner < number){
        output.innerHTML = "le nombre que vous avez choisir est plus petit"
    }
    else {
      output.innerHTML = "le nombre que vous avez choisir est plus grand"
    }

  } 

});