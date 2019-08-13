const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function () {

  it('should be a function', function () {
    expect(Turn).to.be.a('function');
  });

  it('should return the guess', function () {
    const card = new Card(2, 'What is Robbie\'s favorite place', ['sea otter', 'Alaska', 'capybara'], 'sea otter');
    const turn = new Turn('Alaska', card);
    expect(turn.returnGuess()).to.equal('Alaska');
  });

  it('should return the card', function () {
    const card = new Card(2, 'What is Robbie\'s favorite place', ['sea otter', 'Alaska', 'capybara'], 'sea otter');
    const turn = new Turn('Alaska', card);
    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('should say if the user guessed right', function () {
    const card = new Card(2, 'What is Robbie\'s favorite place', ['sea otter', 'Alaska', 'capybara'], 'sea otter');
    const turn = new Turn('Alaska', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should return feedback', function () {
    const card = new Card(2, 'What is Robbie\'s favorite place', ['sea otter', 'Alaska', 'capybara'], 'sea otter');
    const turn = new Turn('Alaska', card);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});