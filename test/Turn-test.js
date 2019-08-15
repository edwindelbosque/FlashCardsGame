const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

let card, turn1, turn2;
beforeEach(() => {
  card = new Card({ id: 2, question: 'What is Robbie\'s favorite place', answers: ['sea otter', 'Alaska', 'capybara'], correctAnswer: 'sea otter' });
  turn1 = new Turn('sea otter', card);
  turn2 = new Turn('Alaska', card)
});

describe('Turn', function () {

  it('should be a function', function () {
    expect(Turn).to.be.a('function');
  });

  it('should return the guess', function () {
    expect(turn1.returnGuess()).to.equal('sea otter');
  });

  it('should return the card', function () {
    expect(turn1.returnCard()).to.deep.equal(card);
  });

  it('should evaluate the guess', function () {
    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should return feedback', function () {
    expect(turn1.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});