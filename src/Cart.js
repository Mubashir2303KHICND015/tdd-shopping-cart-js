module.exports = class Cart {
    items = []
    totalPrice = 0

    clearList = () => this.items = []
    getCart = () => this.items.length
    getTotalPrice = () => this.totalPrice
    addItem = (item) => {
        let total = item.quantity * item.price
        this.totalPrice += total
        this.items.push(item)
    }
    itemQuantities = (items) => items.map(item => `${item.name} - x${item.quantity}`)
    itemizedList = (items) => items.map(item=>{
        let total = item.price * item.quantity
        return `${item.name} x${item.quantity} - $${total}`
    })
    

}
