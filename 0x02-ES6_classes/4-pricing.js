const assert = require('assert');

export default class Pricing {
  constructor(amount, currency) {
    assert(typeof (amount) === 'number', TypeError('Amount must be a number'));
    assert(typeof (currency) === 'object', TypeError('Currency must be an object'));
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    assert(typeof (currency) === 'object', TypeError('Currency must be an object'));
    this._currency = currency;
  }

  set amount(amount) {
    assert(typeof (amount) === 'number', TypeError('Amount must be a number'));
    this._amount = amount;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} ${this._currency.code}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
