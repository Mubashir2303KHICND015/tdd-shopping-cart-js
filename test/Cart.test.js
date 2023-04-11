let Cart = require("../src/Cart")
let Item = require("../src/Item")
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

test("AC3",()=>{
    //Arrange
    let assert = ['Handbag - x2', 'Watch - x4']
    let cart = new Cart()
    cart.clearList()
    let item = new Item("HandBag",25,false,1)
    let item2 = new Item("Watch",250,false,4)
    cart.addItem(item)
    cart.addItem(item2)
    //Act
    let result = cart.itemQuantities()
    //Assert
    expect(result).Equal(assert)
})