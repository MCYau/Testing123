let player = {
    name: "YMC",
    chips: 200
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let msg = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let randomNumber = Math.floor( Math.random() * 13) + 1;

    if (randomNumber === 1){
        return 11;
    } else if (randomNumber > 10){
        return 10;
    } else {
        return randomNumber;
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    cardEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20){
        msg = "Do you want to draw a new card?";
    } else if (sum === 21){
        msg = "Wohoo! You've got BlackJack!";
        hasBlackJack = true;
    } else {
        msg = "You're out of the game!";
        isAlive = false;
    }
    
    messageEl.textContent = msg;
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        console.log("Draw a new card from the deck.");
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}
