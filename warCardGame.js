/*
 * Week 6 Assignment
 * Automated Version of War Game
 * Author: Helen Landaverde
 * 
 */

 

class Card {
    constructor(suits, numbers, values) {
       this.suits = suits;
       this.numbers = numbers;
       this.values = values;
    }

    describe() {
       return  `${this.numbers} of ${this.suits}`;
    }

       
}
 

class Deck {
    constructor() {
        this.deckOfCards = [];
    }

        createAndShuffle() {
            this.createCardsForDeck();
            this.shuffleDeck();
            return this.deckOfCards;
        }


       createCardsForDeck() {
        const suits = ["Clubs", "Hearts", "Spades", "Diamonds"];
        const numbers = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

        //creates cards and pushes them into the deck of cards array
            for(let i = 0; i < suits.length; i++) {
                for(let j = 0; j < numbers.length; j++) {
                    this.deckOfCards.push(new Card(suits[i], numbers[j], values[j])); //passes the elements of the suits, numbers, and values arrays to the card class to create new card objects
                }
            }
        }


        shuffleDeck() {
            for (let i = this.deckOfCards.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * i);
                let temp = this.deckOfCards[i];
                this.deckOfCards[i] = this.deckOfCards[j];
                this.deckOfCards[j] = temp;  
            }
        }
            
}

    
class Game {

       constructor() {
        this.newDeck = new Deck().createAndShuffle();
        this.player1 = []
        this.player2 = []
       }


    compareCards() {
    
    //divides the deck of 52 cards between the two players
        this.player1 = this.newDeck.slice(0, 26); 
        this.player2 = this.newDeck.slice(26, 52);


        let scorePlayer1 = 0;
        let scorePlayer2 = 0;
        let totalTurns = this.player1.length;
        console.log("War Card Game");

            for(let i = 0; i < totalTurns; i++) {

            //removes one card from each player's deck 
                let currentCardPlayer1 = this.player1.shift();
                let currentCardPlayer2 = this.player2.shift();

                console.log(`Turn Number ${i + 1}:`)

                console.log(`Cards: Player 1's card: ${currentCardPlayer1.describe()}  Player 2's card: ${currentCardPlayer2.describe()}`);

            //compares values of each player's current card and adds a point to the player that wins the turn
                if(currentCardPlayer1.values > currentCardPlayer2.values) {
                    console.log("The player with the highest card value is Player 1. One point will be added to Player 1's score.");
                    scorePlayer1++;
                    console.log(`Scores: Player 1's current score: ${scorePlayer1}   Player 2's current score: ${scorePlayer2}.`);

                    
                } else if (currentCardPlayer2.values > currentCardPlayer1.values) {
                    console.log("The player with the highest card value is Player 2. One point will be added to Player 2's score.");
                    scorePlayer2++;
                    console.log(`Scores: Player 1's current score: ${scorePlayer1}   Player 2's current score: ${scorePlayer2}.`);

            //if values of cards are equal, no points are added to the players
                } else {
                    console.log("It's a tie! No points will be added.");
                    console.log(`Scores: Player 1's current score: ${scorePlayer1}   Player 2's current score: ${scorePlayer2}.`);
                }

                console.log("    ");
            }

            
                console.log(`Total Scores: Player 1's Total Score: ${scorePlayer1} and Player 2's Total Score: ${scorePlayer2}.`);

                let scoresArray = [scorePlayer1, scorePlayer2]
                return scoresArray;
        
    }



    winningPlayer() {
        let scores = this.compareCards();
          if (scores[0] > scores[1]) {
                console.log("Player 1 is the winner!");
            } else if (scores[1] > scores[0]) {
                console.log("Player 2 is the winner!");
            } else {
                console.log("It's a tie! Neither Player 1 or Player 2 won.");
            }
    }
    
    


}

    //creates a new object of the Game class and calls the winningPlayer method
    let startGame = new Game().winningPlayer();




