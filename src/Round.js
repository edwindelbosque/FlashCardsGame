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
    this.turnCount++;
    turn.evaluateGuess();
    !turn.evaluateGuess() && this.incorrectGuesses.push(this.returnCurrentCard().id);
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.floor((this.incorrectGuesses.length / this.turnCount) * 100);
  }

  endRound() {
    if (this.turnCount >= this.deck.cards.length) {
      return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    }
  }
}


module.exports = Round;