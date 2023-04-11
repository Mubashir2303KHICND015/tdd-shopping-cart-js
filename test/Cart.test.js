let Cart = require("../src/Cart")
test("AC1",()=>{
    //Arrange
    let assert = 0
    let cart = new Cart()
    //Act
    let result = cart.getCart()
    //Assert
    expect(result).toBe(assert)
})

test("AC2",()=>{
    //Arrange
    let assert = 25
    let cart = new Cart()
    cart.clearList()
    let item = new Item("HandBag",25,false,1)
    cart.addItem(item)
    //Act
    let result = cart.getTotalPrice()
    //Assert
    expect(result).toBe(assert)
})