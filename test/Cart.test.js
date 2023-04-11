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