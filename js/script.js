function showPrompt() {
    const max = 10;
    const randomNumber = Math.ceil(Math.random() * max);
    console.log(randomNumber)
    let attempts = 0;
    let maxAttempts = 3;
    while(attempts<3){
        const guessNumber = prompt("Guess the number between 1-10 :")
    const number = parseInt(guessNumber)
    if(guessNumber === "" || number < 1 || number > 10){
        alert("Type the number first (1-10)")
    }else{
    console.log(number)
        if(number < randomNumber){
            alert(`Correct answer is greater!! You have left ${maxAttempts-attempts-1} attempts`)
        }else if(number > randomNumber){
            alert(`Correct answer is smaller!! You have left ${maxAttempts-attempts-1} attempts`)
        }else if(number === randomNumber){
            alert("You won");
            return;
        }
        attempts++;
}

    }
    alert("Sorry! you loss!")
    
    
}