//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


let findFavDishesKey = () => {
    for(let i = 0; i < Object.keys(person3).length; i++){
    console.log(Object.keys(person3)[i])
}
}
findFavDishesKey()

let findFavDishesValue = () => {
    for(let i = 0; i < Object.values(person3).length; i++){
    console.log(Object.values(person3)[i])
}
}


findFavDishesValue()

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Human(name, age){
    this.name = name;
    this.age = age;


// Use an arrow to create the printInfo method
    this.printInfo = (hair_color, fav_food) =>{
        console.log (`${this.name} is ${this.age} years old. They have ${hair_color} 
        hair and loves to eat ${fav_food}!`)

        return 'Hello there!'
    }
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    this.addAge = () =>{
        let aging = (this.age + 1)
        console.log (`${this.name} will be ${aging} at their next Birthday!`)
        
        return 'Happy Birthday!'
    }   


    this.age_one = (() => {
        let year = 2022
        return () => { return (`${this.name} is getting older!  Age: ${this.age++}  in ${year ++}`)}
    }) ()


    this.addMultipleYears = (years) =>{
        let aging = (this.age + years)
        console.log (`${this.name} will be ${aging} in ${years} year(s)!`)
        
        return 'Congrats!'
    }


}

let = human1 = new Human('Jame', 24)
console.log(human1.printInfo('blue','musubi'))
console.log(human1.addAge())

console.log(human1.age_one())
console.log(human1.age_one())
console.log(human1.age_one())


let = human2 = new Human('Jelbina', 2)
console.log(human2.printInfo('dark brown', 'apples'))
console.log(human2.addAge())
console.log(human2.addMultipleYears(3))


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine
     if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const greaterTen = (stringy) => {
    return new Promise ( (resolve, reject) => {
        if (stringy.length > 10){
            resolve(true)
        } else {
            reject (false)
        }
    })
}


greaterTen('Iamtestingthismethod')

.then( (correct) =>{
    console.log(`Big word: ${correct}`)
})

.catch( (wrong) => {
    console.log(`Small word: ${wrong}`)
})

greaterTen('Iam')

.then( (correct) =>{
    console.log(`Big word: ${correct}`)
})

.catch( (wrong) => {
    console.log(`Small word: ${wrong}`)
})
