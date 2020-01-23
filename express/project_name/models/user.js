const users = []
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        User.id += 1
        this.id = User.id
    }

    getName() {
        return `${this.firstName}${this.lastName}`
    }

    static insert(firstName, lastName, age) {
        const user = new User(firstName, lastName, age)
        User.users.push(user)    
        return user
    }

    static getOneByName(firstName, lastName) {
        return User.users.find(u => u.firstName === firstName && u.lastName === lastName)
    }

    static getOneById(userId) {
        return User.users.find(u => u.id === userId)
    }

    static list(query) {
        return User.users
    }

    static get ['users']() {
        return users
    }
}

// User.insert = function(firstName, lastName, age) {
//     const u = new User(firstName, lastName, age)
//     User.userrs.push(u)
//     return u
// }

// users.users = []
User.id = 0
module.exports = User


console.log(User.list())
console.log(User.insert('ke', 'yang', 12))
console.log(User.list())
console.log(User.insert('lao', 'yang', 12))
console.log(User.list())
console.log(User.getOneByName('lao', 'yang'))