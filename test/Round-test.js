const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
let card1, card2, card3, deck, round;

beforeEach(() => {
  card1 = new Card({ id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter' });
  card2 = new Card({ id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder' });
  card3 = new Card({ id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'spleen' });
  deck = new Deck([card1, card2, card3]);
  round = new Round(deck);
});

describe('Round', function () {

  it('should be a function', function () {
    expect(Round).to.be.a('function');
  });

  it('should return current card being played', function () {
    expect(round.returnCurrentCard()).to.deep.equal(card1)
  });

  it('it should say if the answer is correct', function () {
    expect(round.takeTurn('capybara')).to.equal('incorrect!');
    expect(round.takeTurn('gallbladder')).to.equal('correct!');
  });

  it('it should show the percentage of correct guesses', function () {
    expect(round.takeTurn('capybara')).to.equal('incorrect!');
    expect(round.takeTurn('gallbladder')).to.equal('correct!');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('it should show a message when round ends', function () {
    expect(round.takeTurn('capybara')).to.equal('incorrect!');
    expect(round.takeTurn('gallbladder')).to.equal('correct!');
    expect(round.takeTurn('spleen')).to.equal('correct!');
    expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!');
  });
});