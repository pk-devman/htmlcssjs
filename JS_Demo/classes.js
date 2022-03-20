// class User{
//     constructor(name){
//         this.name = name;
//     }

//     login(){
//         console.log(`${this.name} has logged!`);
//     }

// }

// const userObj = new User('PK');
// console.log(userObj);
// userObj.login();

// class Admin extends User{
//     constructor(name, id){
//         super(name);
//         this.id = id;
//     }

// }

// const adminObj = new Admin('PK', 1);
// adminObj.login();

function User(name){
    this.name = name;

    // this.login = function(){
    //     console.log(`${name} has logged in!`);
    // }
}

User.prototype.login = function(){
         console.log(`${name} has logged in!`);
     }
const userObj = new User('PK');
console.log(userObj);