const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turnCount];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    !turn.evaluateGuess() && this.incorrectGuesses.push(this.returnCurrentCard().id);
    this.turnCount++;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.floor((this.incorrectGuesses.length / this.turnCount) * 100);
  }

  endRound() {
    if (this.turnCount >= this.deck.cards.length) {
      console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    }
  }
}

module.exports = Round;