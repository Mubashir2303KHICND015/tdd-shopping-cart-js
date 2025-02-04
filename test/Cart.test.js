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
    let assert = ["Handbag - x1", "Watch - x4"]
    let cart = new Cart()
    cart.clearList()
    let item = new Item("Handbag",25,false,1)
    let item2 = new Item("Watch",250,false,4)
    cart.addItem(item)
    cart.addItem(item2)
    //Act
    let result = cart.itemQuantities(cart.items)
    //Assert
    expect(result).toEqual(assert)
})

test("AC4",()=>{
    //Arrange
    let assert = ['Handbag x1 - $25', 'Watch x4 - $1000']
    let cart = new Cart()
    cart.clearList()
    let item = new Item("Handbag",25,false,1)
    let item2 = new Item("Watch",250,false,4)
    cart.addItem(item)
    cart.addItem(item2)
    //Act
    let result = cart.itemizedList(cart.items)
    //Assert
    expect(result).toEqual(assert)
})

test("AC5",()=>{
    //Arrange
    let assert = 1025
    let cart = new Cart()
    cart.clearList()
    let item = new Item("Handbag",25,false,1)
    let item2 = new Item("Watch",250,false,4)
    cart.addItem(item)
    cart.addItem(item2)
    //Act
    let result = cart.totalPrice
    //Assert
    expect(result).toEqual(assert)
})

test("AC6",()=>{
    //Arrange
    let assert = ['Handbag x1 - $25', 'Watch x4 - $1000']
    let cart = new Cart()
    cart.clearList()
    let item = new Item("Handbag",25,true,1)
    let item2 = new Item("Watch",250,true,4)
    let item3 = new Item("Gum",75,false,2)
    cart.addItem(item)
    cart.addItem(item2)
    cart.addItem(item3)
    //Act
    let result = cart.onSaleItems(cart.items)
    //Assert
    expect(result).toEqual(assert)
})