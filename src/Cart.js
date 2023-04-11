module.exports = class Cart {
    items = []
    totalPrice = 0

    //This function clears the state of items 
    clearList = () => this.items = []
    //This function gives the number of items in cart
    getCart = () => this.items.length
    //This functions returns the total amount of items in our cart
    getTotalPrice = () => this.totalPrice
    //This function adds item to cart
    addItem = (item) => {
        let total = item.quantity * item.price
        this.totalPrice += total
        this.items.push(item)
    }
    //This function returns info of our products with quantity
    itemQuantities = (items) => items.map(item => `${item.name} - x${item.quantity}`)
    //This function returns info of products with total price of each product
    itemizedList = (items) => items.map(item=>{
        let total = item.price * item.quantity
        return `${item.name} x${item.quantity} - $${total}`
    })
    //This function returns only those products which are on sale
    onSaleItems = (items) => {
        let onSale = items.filter(item => item.onSale)
        return this.itemizedList(onSale)
    }
    

}
