import { describe, it } from "mocha";
import { expect } from 'chai';
import { lottery } from '../Lottery.js'; 

describe('Problem 3. Unit Testing', () => {

  describe('buyLotteryTicket', () => {

    it('all valid inputs', () => {
      expect(lottery.buyLotteryTicket(50, 20, true)).to.equal('You bought 20 tickets for 1000$.');
    });

    it('ticketPrice != number', () => {
      expect(() => lottery.buyLotteryTicket('50', 20, true)).to.throw('Invalid input!');
    });

    it('ticketCount != number', () => {
      expect(() => lottery.buyLotteryTicket(50, '20', true)).to.throw('Invalid input!');
    });

    it('buy != boolean', () => {
      expect(() => lottery.buyLotteryTicket(50, 20, 'true')).to.throw('Invalid input!');
    });

    it('buy = false', () => {
      expect(() => lottery.buyLotteryTicket(50, 20, false)).to.throw('Unable to buy lottery ticket!');
    });

    it('ticketPrice > 0', () => {
      expect(lottery.buyLotteryTicket(1, 20, true)).to.equal('You bought 20 tickets for 20$.');
      expect(() => lottery.buyLotteryTicket(0, 20, true)).to.throw('Invalid input!');
      expect(() => lottery.buyLotteryTicket(-1, 20, true)).to.throw('Invalid input!');
    });

    it('ticketCount >= 1', () => {
      expect(lottery.buyLotteryTicket(20, 1, true)).to.equal('You bought 1 tickets for 20$.');
      expect(lottery.buyLotteryTicket(2, 20, true)).to.equal('You bought 20 tickets for 40$.');
      expect(() => lottery.buyLotteryTicket(-1, 20, true)).to.throw('Invalid input!');
    });

  });

  describe('checkTicket', () => {

    it('valid inputs', () => {
      expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 8, 9])).to.equal('Congratulations you win, check your reward!');
      expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal('You win the JACKPOT!!!');
    });

    it('invalid inputs', () => {
      expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, ])).to.throw('Invalid input!');
      expect(() => lottery.checkTicket([1, 2], [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
      expect(() => lottery.checkTicket('[1, 2, 3, 4, 5, 6]', [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
      expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], '[1, 2, 3, 4, 5, 6]')).to.throw('Invalid input!');
      
    });

  });

  describe('secondChance', () => {

    it('valid inputs', () => {
      expect(lottery.secondChance(2, [1,2,3])).to.equal('You win our second chance prize!');
      expect(lottery.secondChance(4, [1,2,3])).to.equal(`Sorry, your ticket didn't win!`);
    });

    it('invalid ticketID', () => {
      expect(() => lottery.secondChance('2', [1,2,3])).to.throw('Invalid input!');
    });

    it('invalid secondChanceWinningIDs', () => {
      expect(() => lottery.secondChance(2, '[1,2,3]')).to.throw('Invalid input!');
    });

  });

});

