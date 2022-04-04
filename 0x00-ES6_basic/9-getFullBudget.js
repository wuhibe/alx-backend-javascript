import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  return {
    ...(getBudgetObject(income, gdp, capita)),
    getIncomeInDollars: () => `$${income}`,
    getIncomeInEuros: () => `${income} euros`,
  };
}
