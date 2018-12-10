// function hello(){
//     return "random string"
// }
//
// describe("hello", () => {
//     test ("returns a random string", () => {
//         expect(hello()).toBe("random string")
//     })
// })



//write an if / else statement that logs "eat food" if you are hungry and "keep working" if you are not hungry.
//
//
// describe("eatOrWork", () => {
//     test ("returns eat food or keep working based on input", () => {
//         expect(eatOrWork("hungry")).toBe("eat food")
//         expect(eatOrWork("not hungry")).toBe("keep working")
//     })
//
//     test ("when someone doesn't put in a string", () => {
//         expect(eatOrWork(5)).toBe("Please put in either hungry or not hungry")
//         expect(eatOrWork("daba daba doo")).toBe("Please put in either hungry or not hungry")
//     })
// })
// //
// eatOrWork = (str) => {
//     if(str === "hungry"){
//         return "eat food"
//     } else if(str === "not hungry") {
//         return "keep working"
//     } else {
//         return "Please put in either hungry or not hungry"
//     }
// }

//write a function returns "drink coffee" if you are tired and "keep working" if you are not tired.  Then write the test.

tired = (str) => {
    if(str === "tired"){
        return "drink coffee"
    } else if (str === "not tired") {
        return "keep working"
    } else {
        return "put in tired or not tired"
    }
}

describe("tired", () => {
    test("the function returns drink coffee if tired or keep working if not", () => {
        expect(tired("tired")).toBe("drink coffee")
        expect(tired("not tired")).toBe("keep WORKing")
    })

    test("returns put in tired or not tired if a user mistake", () => {
        expect(tired(8)).toBe("put in tired or not tired")
    })


})



// Exercise 1
// Consider this variable:
// Write the code that will add "granola" to the end of array without altering the original array.

// describe("addGranola", () => {
//     var groceryList1 = ["apples", "carrots", "oatmeal"]
//     var result = ["apples", "carrots", "oatmeal", "granola"]
//     test ("adds granola to the end of an array", () => {
//         expect(addGranola(groceryList1)).toEqual(result)
//     })
// })
// //
// addGranola = (arr1) => {
//     var arr2 = arr1.concat("granola")
//     return arr2
// }


// function hello(){
//     return "random string"
// }
//
// describe("hello", () => {
//     test ("returns a random string", () => {
//         expect(hello()).toBe("random string")
//     })
// })


// //write an if / else statement that logs "in budget" if a price is lower than $250.
//
//
//
// function greaterNum(num1, num2){
//     if(num1 > num2) {
//         return `${num1} is greater than ${num2}`
//     } else if (num1 < num2) {
//         return `${num2} is greater than ${num1}`
//     } else {
//         return `${num1} is the same as ${num2}`
//     }
// }
//
// describe("greaterNum", () => {
//     test ("returns the greater number", () => {
//         expect(greaterNum(2, 3)).toBe("3 is greater than 2")
//         expect(greaterNum(10, 9)).toBe("10 is greater than 9")
//
//     })
//
//     test ("edge case where numbers are the same", () => {
//         expect(greaterNum(3, 3)).toBe("3 is the same as 3")
//
//         })
//     })


//
//     // Consider this variable:
// // var product = { name: "chair", price: 14.99 }
// Write a function called describeProduct takes product as an argument and returns "The product is a chair. It costs $14.99".

// describe("describeProduct", () => {
//     test("return a string with the product and cost", () => {
//         var product = { name: "table", price: 18.99 }
//         expect(describeProduct(product)).toBe("The product is a table. It costs 18.99.")
//     })
// })
//
// function describeProduct(product) {
//     return "The product is a " + product.name + "." + " It costs " + product.price + "."
// }
