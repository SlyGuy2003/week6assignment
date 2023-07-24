// this program will execute a game of war where whoever runs out of cards wins

class Deck { //class that contains functions that will create a 52 card deck and shuffle it, deal it between 2 players
constructor(){}

    
    getShuffledDeck(){ // function that will create a deck and shuffle it
        let types = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'] // the values of the cards
        let suits = ['spades', 'diamonds', 'clubs', 'hearts'] // all the suits
        let deck = [] // empty array that will contain all 52 cards

        //creates the deck, combining every type with every suit. pushing it to the deck array
        for(let i = 0; i < suits.length; i++){
            let cardNum = 2
            for(let x = 0; x < types.length; x++){
                // if the type starts with a letter, puts a number value in front of it, making it easier to compare later on
                if (types[x].charAt(0) === 'A' || types[x].charAt(0) === 'J' || types[x].charAt(0) === 'Q' || types[x].charAt(0) === 'K'){
                    let card = `${cardNum} (${types[x]}) of ${suits[i]}`
                    
                }
                else { // just conbines normally if the type starts with a number
                    var card = `${types[x]} of ${suits[i]}`
                }
                deck.push(card)
                cardNum++
            }
        }
        let currentIndex = deck.length,  randomIndex

        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex)
          currentIndex--;
      
          // And swap it with the current element.
          [deck[currentIndex], deck[randomIndex]] = [
            deck[randomIndex], deck[currentIndex]]
        }
    
        return deck
    }

    getPlayer1Deck(){ // splits deck to the first player
        let shuffledDeck = this.getShuffledDeck()
        let player1deck = []
        for (let i = 0; i < shuffledDeck.length; i++){
            if (i % 2 === 0){
                player1deck.push(shuffledDeck[i])
            }
        }
        return player1deck

    }
    getPlayer2Deck(){ // splits other part of the deck to the second player
        let shuffledDeck = this.getShuffledDeck()
        let player2deck = []
        for (let i = 0; i < shuffledDeck.length; i++){
            if (i % 2 === 1){
                player2deck.push(shuffledDeck[i])
            }
        }
        return player2deck
    }
}

const playGame = (firstPlayersCards, secondPlayersCards) => { // function that uses the 2 players cards and runs the game

    let turn = 1 // variable that counts how many turns have passed

    for(let i = 0; firstPlayersCards.length > i && secondPlayersCards.length > i;) { //loops through until a player looses all their cards

        
        let firstPlayersCardValue = Number(firstPlayersCards[0].substring(0, 2).trim()) // converts the first card into a number to easily compare
        let secondPlayersCardValue = Number(secondPlayersCards[0].substring(0, 2).trim())

        if(firstPlayersCardValue > secondPlayersCardValue) { // if first players card is greater returns both cards to the first player, both to the back of their deck
            console.log(`turn ${turn}) ${firstPlayersCards[0]} VS. ${secondPlayersCards[0]}: First player wins! they get to take the ${secondPlayersCards[0]}.`)
            firstPlayersCards.push(firstPlayersCards[0])
            firstPlayersCards.push(secondPlayersCards[0])
            
            firstPlayersCards.splice(0, 1)
            secondPlayersCards.splice(0, 1)

        }
        else if (firstPlayersCardValue < secondPlayersCardValue) {// if second players card is greater returns both cards to the second player, both to the back of their deck
            console.log(`turn ${turn}) ${firstPlayersCards[0]} VS. ${secondPlayersCards[0]}: Second player wins! they get to take the ${firstPlayersCards[0]}.`)
            secondPlayersCards.push(secondPlayersCards[0])
            secondPlayersCards.push(firstPlayersCards[0])
            
            secondPlayersCards.splice(0, 1)
            firstPlayersCards.splice(0, 1)

        }
        else{// ties will remove both cards out of the game
            console.log(`turn ${turn}) ${firstPlayersCards[0]} VS. ${secondPlayersCards[0]}: Tie!, Both cards are lost in this battle.`)
            secondPlayersCards.splice(0, 1)
            firstPlayersCards.splice(0, 1)
        }
        turn += 1

    }

    if(firstPlayersCards.length === 0){ // if statement that reads who wins the game overall
        console.log('Player one wins!')
    }
    else {
        console.log('Player two wins!')
    }

}

const deck1 = new Deck() //creates a new deck object

firstPlayersCards = deck1.getPlayer1Deck() // gets both players deck
secondPlayersCards = deck1.getPlayer2Deck()

console.log(`player one's deck looks like this: ${firstPlayersCards}`) // logs both players decks 
console.log(`player two's deck looks like this: ${secondPlayersCards}`)

playGame(firstPlayersCards, secondPlayersCards) // runs through the game
