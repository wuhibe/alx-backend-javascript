const expect = require('chai');
const calcul = require('./2-calcul_chai');

expect(calcul('SUM', 2, 5)).to.equal(7);
expect(calcul('SUBTRACT', 22.1, 7.6)).to.equal(14);
expect(calcul('DIVIDE', 2.2, 5)).to.equal(0.4);
expect(calcul('DIVIDE', 2.2, 0)).to.equal('Error');
