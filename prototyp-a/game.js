function guessgame() {
    let randomNr =NMath.floor(Math.random()*101);
    let guess;
    do {
        guess = prompt("devine un nombre entre 1et 100");
        console.log("geuss,randomNr");
        if (randomNr > guess) {
            console.log("trop petit");
        } else if (randomNr<guess) {
            console.log("trop grand");
        }
    }while (guess != randomNr);
}
guessgame();
