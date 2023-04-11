module.exports = class Item {
  constructor(name, price, onSale, quantity) {
    this.name = name
    this.price = price
    this.onSale = onSale
    this.quantity = quantity
  }
}
