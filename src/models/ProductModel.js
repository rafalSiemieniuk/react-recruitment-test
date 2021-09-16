import { formatCurrency } from 'helpers/formatCurrencyHelper';

class ProductModel {
  pid;
  name;
  price;
  max;
  min;
  isBlocked;
  quantity;

  constructor(obj) {
      if (obj) {
          Object.assign(this, obj);
          this.pid = obj.pid;
          this.name = obj.name;
          this.price = obj.price;
          this.max = obj.max;
          this.min = obj.min;
          this.isBlocked = obj.isBlocked;
          this.quantity = obj.quantity || 1;
          this.priceInNumber = parseFloat(this.price, 10) * this.quantity;
      }
  }

  get actualPrice() {
    return formatCurrency(this.price * this.quantity);
  }

  // get priceInNumber() {
  //   return parseInt(this.price, 10) * this.quantity;
  // }
}

export default ProductModel;
