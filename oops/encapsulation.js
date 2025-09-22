/* 
Encapsulation means storing the related data and methods together into a single unit, 
inside a class or object. This helps in securing the valuable information so that it 
is not directly changed and makes your code cleaner and easier to maintain. This can 
be done by using private fields and by adding a “#” before the name of the property.
*/

class User {
    // Private fields
    #password = 12345
    #isLogin = false

    constructor(userName) {
        this.userName = userName;
    }

    // public fields
    login(password) {
        if (this.#password === password) {
            this.#isLogin = true
            console.log(this.userName + " logged in")
            return true;
        } else {
            this.#isLogin = false
            return console.log("password galat hai...")
        }
    }

    logout() {
        this.#isLogin = false
        return console.log(this.userName + " logged out")
    }

    isLoggedIn() {
        return this.#isLogin
    }

    changePassword(oldPassword, newPassword) {
        if (this.#password === oldPassword && newPassword !== oldPassword && this.#isLogin) {
            if (newPassword.length < 6) {
                return console.log("Password must be at least 6 characters");
            }
            this.#password = newPassword
            return console.log("Password change ho gya")
        } else if (this.#isLogin === false) {
            return console.log("Ooji app login nhi hain kya?");
        } else if (newPassword === oldPassword) {
            return console.log("Ooji naya password same hai purane password se.");
        } else {
            return console.log("Purana Password galat dalen hain.");
        }
    }
}

const user = new User("Azad")
user.login(12345)
console.log(user.isLoggedIn())
user.changePassword(12345, 12345)
user.changePassword(12345, 12346)
user.changePassword(12346, 12345)
user.changePassword(12625, 98765)
user.logout()
user.isLoggedIn()