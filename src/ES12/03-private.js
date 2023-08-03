class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
    #speak() {
        return "Hello"
    }

    get #uAge() {
        return this.age
    }

    set #uAge(n) {
        this.age = n
    }
}

const newUser = new User("Ana");

console.log(newUser.greeting())

const bebeloper = new User();

//setters getters

const david = new User("David", 15)
console.log(david.uAge)
console.log(david.uAge = 20)
console.log(david.uAge)

