// class User{
//     constructor(name, password){
//         this._name = name
//         this._password = password
//     }
// }

// const kedar = new User("kedar", 123456)
// console.log(kedar._password);

class User{
    #name
    constructor(name, password){
        this.#name = name
        this._password = password
    }
    
    get getName(){
    	console.log(this._name)
    }
}

const kedar = new User("kedar", 123456)
console.log(kedar.#name);