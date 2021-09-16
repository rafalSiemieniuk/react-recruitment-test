import currencyFormatter from 'currency-formatter';

export const formatCurrency = (value) => {
  return currencyFormatter.format(value, { code: 'PLN' })
}